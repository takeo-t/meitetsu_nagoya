import { createContext, useContext, useState } from "react";
import { StationMappingItem } from "../type";

export type FavoriteContextType = {
    favoriteStation: StationMappingItem | null;
    setFavoriteStation: (station: StationMappingItem) => void;
};

export const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

interface FavoriteProviderProps {
    children: React.ReactNode;
}

export const FavoriteProvider: React.FC<FavoriteProviderProps> = ({ children }) => {
    const [favoriteStation, setFavoriteStation] = useState<StationMappingItem | null>(null);

    return (
        <FavoriteContext.Provider value={{ favoriteStation, setFavoriteStation }}>
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
