import axios from "axios";
import { createContext, useContext, useState } from "react";
import { Station } from "../type";

export type FavoriteContextType = {
    favoriteStation: Station | null;
    setFavoriteStation: (station: Station) => void;
    saveFavoriteStation: (station: Station) => Promise<void>;
};

export const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

interface FavoriteProviderProps {
    children: React.ReactNode;
}

export const FavoriteProvider: React.FC<FavoriteProviderProps> = ({ children }) => {
    const [favoriteStation, setFavoriteStation] = useState<Station | null>(null);
    
    const saveFavoriteStation = async (station: Station) => {
        console.log("Station Object:", station);
        console.log("Station ID:", station.id);
        try {
            console.log("Sending data:", { station_id: station.id });
            const response = await axios.post('http://localhost:3000/api/v2/users/2/favorite_stations', {
                station_id: station.id
            });
            console.log("Response data:", response.data);
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
