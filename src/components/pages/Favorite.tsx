import { FC, memo } from "react";
import { useFavorite } from "../../contexts/FavoriteContext";

export const Favorite: FC = memo(() => {
    const { favoriteStation } = useFavorite();

    if (!favoriteStation) return <p>お気に入りの駅はありません</p>;

    // ここで favoriteStation を使用して情報を表示
    return (
        <div>
            <p>{favoriteStation.forStations}</p>
            <p>{favoriteStation.forStationsEn}</p>
            <p>{favoriteStation.trainClass}</p>
        </div>
    );
});
