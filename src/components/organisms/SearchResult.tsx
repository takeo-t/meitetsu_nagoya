import { FC, useCallback } from "react";
import { Box, Button } from "@chakra-ui/react";

import scssShowStations from "../pages/scssShowStations.module.scss";
import { Station } from "../../type";
import { StationMappingItem } from "../../type";
import { addFavoriteStation } from '../../api'
import useAuth from "../../hooks/useAuth";

interface SearchResultsProps {
    searchResults: Station[];
    selectedStation: Station | null;
    stationMapping: Record<string, StationMappingItem>;
    onClick: () => void;
}

export const SearchResults: FC<SearchResultsProps> = ({
    selectedStation,
    stationMapping,
    onClick
}) => {

   const { userId, accessToken, client, uid } = useAuth();

   const handleAddFavoriteStation = useCallback(async () => {
    try {
  if (!userId || !selectedStation || !accessToken || !client || !uid) return;
  await addFavoriteStation(userId, selectedStation.id.toString(), { accessToken, client, uid });
    } catch (error) {
        console.error('Failed to add favorite station:', error);
    }
}, [userId, selectedStation, accessToken, client, uid]);

return (
selectedStation &&
    <div>
        <Box mb={5}>検索結果</Box>
        <p>駅名: {selectedStation.stationName}</p>
        <p>路線名: {selectedStation.lineName}</p>
        <Box mt={5}>下記表示の{selectedStation.positionColor}色乗車位置に並んでください。</Box>
        {(() => {
    const item = stationMapping[selectedStation.id.toString().substring(0, 2)];
    return (
        <>
        {item.forStationsEn === "Okazaki Toyohashi" &&
        <div className={scssShowStations.stationInfoBlue}>
            <p style={{fontSize: "30px"}}>{item.forStations}</p>
            <p>{item.forStationsEn}<br />{item.trainClass}</p>
            </div>}
        {item.forStationsEn === "Narumi Toyoake" &&
        <div className={scssShowStations.stationInfoYellow}>
            <p style={{fontSize: "30px"}}>{item.forStations}</p>
            <p>{item.forStationsEn}<br />{item.trainClass}</p>
            </div>}
        {item.forStationsEn === "Kowa Utsumi Cen Japan Airport" &&
        <div className={scssShowStations.stationInfoGreen}>
            <p style={{fontSize: "25px"}}>{item.forStations}</p>
            <p>{item.forStationsEn}<br />{item.trainClass}</p>
            </div>}
        {item.forStationsEn === "Oe Otagawa" &&
        <div className={scssShowStations.stationInfoLightBlue}>
            <p style={{fontSize: "30px"}}>{item.forStations}</p>
            <p>{item.forStationsEn}<br />{item.trainClass}</p>
            </div>}
        {item.forStationsEn === "Ichinomiya Gifu" &&
        <div className={scssShowStations.stationInfoBlue}>
            <p style={{fontSize: "30px"}}>{item.forStations}</p>
            <p>{item.forStationsEn}<br />{item.trainClass}</p>
            </div>}
        {item.forStationsEn === "Sukaguchi Konomiya" &&
        <div className={scssShowStations.stationInfoYellow}>
            <p style={{fontSize: "30px"}}>{item.forStations}</p>
            <p>{item.forStationsEn}<br />{item.trainClass}</p>
            </div>}
        {item.forStationsEn === "Tsushima Yatomi" &&
        <div className={scssShowStations.stationInfoPurple}>
            <p style={{fontSize: "30px"}}>{item.forStations}</p>
            <p>{item.forStationsEn}<br />{item.trainClass}</p>
            </div>}
        {item.forStationsEn === "Inuyama Kani" &&
        <div className={scssShowStations.stationInfoGreen}>
            <p style={{fontSize: "30px"}}>{item.forStations}</p>
            <p>{item.forStationsEn}<br />{item.trainClass}</p>
            </div>}
        {item.forStationsEn === "Nishiharu Iwakura" &&
        <div className={scssShowStations.stationInfoLightBlue}>
            <p style={{fontSize: "30px"}}>{item.forStations}</p>
            <p>{item.forStationsEn}<br />{item.trainClass}</p>
            </div>}
            <Box display="flex" justifyContent="center" alignItems="center">
            <Button size="sm" onClick={handleAddFavoriteStation}>よく降りる駅に登録</Button>
            </Box>
            <Box m={5} display="flex" justifyContent="center" alignItems="center">
            <Button size="sm" onClick={onClick}>検索結果をクリア</Button>
            </Box>
        </>
    );
})()}
    </div>
);
}