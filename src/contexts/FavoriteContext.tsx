import axios from "axios";
import { createContext, useContext, useState } from "react";
import { Station } from "../type";
import { useAuth } from "../hooks/useAuth";

export type FavoriteContextType = {
    favoriteStation: Station | null;
    setFavoriteStation: (station: Station) => void;
    deleteFavoriteStation: Station | null; 
    setDeleteFavoriteStation: (station: Station) => void;
    saveFavoriteStation: (station: Station) => Promise<void>;
    destroyFavoriteStation: (station: Station) => Promise<void>;
};

export const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

interface FavoriteProviderProps {
    children: React.ReactNode;
}

export const FavoriteProvider: React.FC<FavoriteProviderProps> = ({ children }) => {
    const [favoriteStation, setFavoriteStation] = useState<Station | null>(null);
    const [deleteFavoriteStation, setDeleteFavoriteStation] = useState<Station | null>(null);
    const { userId } = useAuth();
    
    const saveFavoriteStation = async (station: Station) => {
        console.log("Station Object:", station);
        console.log("Station ID:", station.id);
        try {
            console.log("Sending data:", { station_id: station.id });
            const response = await axios.post(`http://localhost:3000/api/v2/users/${userId}/favorite_stations`, {
                favorite_station: { station2_id: station.id }
        },{
                headers: {
                    'Content-Type': 'application/json'
                  }
            });
            console.log("Response data:", response.data);
            setFavoriteStation(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    
    const destroyFavoriteStation = async (station: Station) => {
        console.log("Station Object:", station);
        console.log("Station ID:", station.id);
        try {
            const response = await axios.delete(`http://localhost:3000/api/v2/users/${userId}/favorite_stations/${station.id}`, {
                headers: {
                    'Content-Type': 'application/json'
                  }
                });
            console.log("Response data:", response.data);
            setDeleteFavoriteStation(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <FavoriteContext.Provider value={{ favoriteStation, setFavoriteStation, deleteFavoriteStation, setDeleteFavoriteStation, saveFavoriteStation, destroyFavoriteStation }}>
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
