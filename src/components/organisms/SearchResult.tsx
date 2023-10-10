import { FC } from "react";
import { Box, Button } from "@chakra-ui/react";
// import  scssShowStations from "../pages/scssShowStations.module.scss";
import { Station, ChangeStationData, StationMappingItem } from "../../type";
// import { useAuth } from "../../hooks/useAuth";
import { useFavorite } from "../../contexts/FavoriteContext";
import { stationMapping, renderStationInfo } from "../../theme/stationUtils";

interface SearchResultsProps {
    searchResults: Station[];
    selectedStation: Station | null;
    onClick: () => void;
}

export const SearchResults: FC<SearchResultsProps> = ({
    selectedStation,
    onClick,
}) => {

    // const { userId, accessToken, client, uid } = useAuth();

    // const forStations: string[] = ['岡崎・豊橋','鳴海・豊明','河和.内海.中部国際空港','大江・太田川','一宮・岐阜','須ヶ口・国府宮','津島・弥富','犬山・可児','西春・岩倉'];
    // const forStationsEn: string[] = ['Okazaki Toyohashi','Narumi Toyoake','Kowa Utsumi Cen Japan Airport','Oe Otagawa','Ichinomiya Gifu','Sukaguchi Konomiya','Tsushima Yatomi','Inuyama Kani','Nishiharu Iwakura'];
    // const trainClass: string[] = ['快特・特急・快急・急行・準急','普通'];

    // const stationMapping: Record<string, StationMappingItem> = {
    //         '41': {forStations: forStations[0], forStationsEn: forStationsEn[0], trainClass: trainClass[0]},
    //         '42': {forStations: forStations[1], forStationsEn: forStationsEn[1], trainClass: trainClass[1]},
    //         '43': {forStations: forStations[2], forStationsEn: forStationsEn[2], trainClass: trainClass[0]},
    //         '44': {forStations: forStations[3], forStationsEn: forStationsEn[3], trainClass: trainClass[0]},
    //         '15': {forStations: forStations[4], forStationsEn: forStationsEn[4], trainClass: trainClass[0]},
    //         '16': {forStations: forStations[5], forStationsEn: forStationsEn[5], trainClass: trainClass[1]},
    //         '17': {forStations: forStations[6], forStationsEn: forStationsEn[6], trainClass: trainClass[0]},
    //         '18': {forStations: forStations[7], forStationsEn: forStationsEn[7], trainClass: trainClass[0]},
    //         '19': {forStations: forStations[8], forStationsEn: forStationsEn[8], trainClass: trainClass[1]}
    // };

    // const stationStylesMapping: StationStylesMappingType = {
    //     "Okazaki Toyohashi": scssShowStations.stationInfoBlue,
    //     "Narumi Toyoake": scssShowStations.stationInfoYellow,
    //     "Kowa Utsumi Cen Japan Airport": scssShowStations.stationInfoGreen,
    //     "Oe Otagawa": scssShowStations.stationInfoLightBlue,
    //     "Ichinomiya Gifu": scssShowStations.stationInfoBlue,
    //     "Sukaguchi Konomiya": scssShowStations.stationInfoYellow,
    //     "Tsushima Yatomi": scssShowStations.stationInfoPurple,
    //     "Inuyama Kani": scssShowStations.stationInfoGreen,
    //     "Nishiharu Iwakura": scssShowStations.stationInfoLightBlue
    // };

    // const renderStationInfo = (item: StationMappingItem) => {
    //     const styleClass = stationStylesMapping[item.forStationsEn];
    //     return (
    //         <div className={`${styleClass} ${scssShowStations.stationInfoBase}`}>
    //             <p className="scssShowStations.title">{item.forStations}</p>
    //             <p className="scssShowStations.description">{item.forStationsEn}<br />{item.trainClass}</p>
    //         </div>
    //     );
    // };

const { saveFavoriteStation } = useFavorite();

const addToFavoriteHandler = async () => {
    if (!selectedStation) return;
    await saveFavoriteStation(selectedStation);
};

    return (
        selectedStation &&
        <Box mb={5}>
            <Box mb={5} fontSize={['sm', 'md', 'lg']}>検索結果</Box>
            <Box fontSize={['sm', 'md', 'lg']}>
            <p>駅名: {selectedStation.stationName}({selectedStation.stationNameKana})駅</p>
            <p>路線名: {selectedStation.lineName}</p>
            <p>到着ホーム: {selectedStation.trackNum}番ホーム</p>
            </Box>
            <Box mt={5} fontSize={['sm', 'md', 'lg']}>下記表示の{selectedStation.positionColor}色乗車位置に並んでください。</Box>
            {(() => {
                const item = stationMapping[selectedStation.id.toString().substring(0, 2)];
                return (
                    <>
                        {renderStationInfo(item)}
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Button size="sm" onClick={addToFavoriteHandler}>乗車位置をメモする</Button>
                        </Box>
                        <Box m={5} display="flex" justifyContent="center" alignItems="center">
                            <Button size="sm" onClick={onClick}>検索結果をクリア</Button>
                        </Box>
                    </>
                );
            })()}
        </Box>
    );
}
