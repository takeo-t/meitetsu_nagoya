import { FC, memo } from "react";

import { FavoriteStations } from "../organisms/FavoriteStations";
import { useFavorite } from "../../contexts/FavoriteContext";


export const Favorite: FC = memo(() => {

    return <FavoriteStations />
});
