import { FC, memo } from "react";
import { useFavorite } from "../../contexts/FavoriteContext";

export const Favorite: FC = memo(() => {
    const { favoriteStation } = useFavorite();

    if (!favoriteStation) return <p>お気に入りの駅はありません</p>;

    return (
        <div>
            <p>{favoriteStation.lineName}</p>
            <p>{favoriteStation.stationNum}</p>
            <p>{favoriteStation.stationName}</p>
            <p>{favoriteStation.stationName}</p>
            <p>{favoriteStation.stationNum}</p>
            <p>{favoriteStation.position}</p>
        </div>
    );
});
