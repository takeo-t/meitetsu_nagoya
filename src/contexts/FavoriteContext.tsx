import axios from "axios";
import { createContext, useContext, useState } from "react";
import { StationMappingItem } from "../type";

export type FavoriteContextType = {
    favoriteStation: StationMappingItem | null;
    setFavoriteStation: (station: StationMappingItem) => void;
    saveFavoriteStation: (station: StationMappingItem) => Promise<void>;
};

export const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

interface FavoriteProviderProps {
    children: React.ReactNode;
}

export const FavoriteProvider: React.FC<FavoriteProviderProps> = ({ children }) => {
    const [favoriteStation, setFavoriteStation] = useState<StationMappingItem | null>(null);
    
    const saveFavoriteStation = async (station: StationMappingItem) => {
        try {
            const response = await axios.post('http://localhost:3000/api/v2/users/2/favorite_stations', {
              station
            });
            setFavoriteStation(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <FavoriteContext.Provider value={{ favoriteStation, setFavoriteStation, saveFavoriteStation }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorite = (): FavoriteContextType => {
    const context = useContext(FavoriteContext);
    if (!context) {
        throw new Error("useFavorite must be used within a FavoriteProvider");
    }
    return context;
};
