import { FC } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Station, StationMappingItem } from '../../type';
import { keysToCamelCase } from '../pages/Home';
import { useFavorite } from '../../contexts/FavoriteContext';
import { stationMapping, renderStationInfo  } from '../../theme/stationUtils';

interface FavoriteStationsProps {
    searchResults?: Station[];
    selectedStation?: Station | null;
    stationMapping?: Record<string, StationMappingItem>;
    onClick?: () => void;
}

export const FavoriteStations: FC<FavoriteStationsProps> = () => {
    const [stations, setStations] = useState<Station[]>([]);
    const { userId } = useAuth();
    const { destroyFavoriteStation, setDeleteFavoriteStation } = useFavorite();

    useEffect(() => {
        async function fetchStations() {
            try {
                const response = await axios.get(`http://localhost:3000/api/v2/users/${userId}/favorite_stations`);
                const dataCamelCased = keysToCamelCase(response.data);
                setStations(dataCamelCased);
                console.log(dataCamelCased);
            } catch (error) {
                console.error("Failed to fetch favorite stations:", error);
            }
        }

        fetchStations();
    }, [userId]);

    const handleDelete = async (station: Station) => {
        try {
            await destroyFavoriteStation(station);
            setStations(prevStations => prevStations.filter(s => s.id !== station.id));
            setDeleteFavoriteStation(station);
        } catch (error) {
            console.error("Failed to delete station:", error);
        }
    }

    return (
        <div>
            <h1>乗車位置メモ</h1>
            <ul>
                {stations.map(station => {
                    const item = stationMapping[station.id.toString().substring(0, 2)];
                    return (
                    <li key={station.id}>
                        {renderStationInfo(item)}
                        {station.id}
                        {station.stationName}
                        {station.lineName}
                        {station.positionColor}
                        <button onClick={() => handleDelete(station)}>削除</button>
                    </li>
                    );
            })}
            </ul>
        </div>
    );
};
