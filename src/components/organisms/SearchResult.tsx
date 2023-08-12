import { FC } from "react";
import { Box, Button } from "@chakra-ui/react";
import  scssShowStations from "../pages/scssShowStations.module.scss";
import { Station, ChangeStationData, StationMappingItem } from "../../type";
import useAuth from "../../hooks/useAuth";

interface SearchResultsProps {
    searchResults: Station[];
    selectedStation: Station | null;
    stationMapping: Record<string, StationMappingItem>;
    onClick: () => void;
    changeStationData: ChangeStationData | null;
}

export const SearchResults: FC<SearchResultsProps> = ({
    selectedStation,
    stationMapping,
    onClick,
}) => {

    const { userId, accessToken, client, uid } = useAuth();

    type StationStylesMappingType = {
        [key: string]: string;
    };

    const stationStylesMapping: StationStylesMappingType = {
        "Okazaki Toyohashi": scssShowStations.stationInfoBlue,
        "Narumi Toyoake": scssShowStations.stationInfoYellow,
        "Kowa Utsumi Cen Japan Airport": scssShowStations.stationInfoGreen,
        "Oe Otagawa": scssShowStations.stationInfoLightBlue,
        "Ichinomiya Gifu": scssShowStations.stationInfoBlue,
        "Sukaguchi Konomiya": scssShowStations.stationInfoYellow,
        "Tsushima Yatomi": scssShowStations.stationInfoPurple,
        "Inuyama Kani": scssShowStations.stationInfoGreen,
        "Nishiharu Iwakura": scssShowStations.stationInfoLightBlue
    };

    const renderStationInfo = (item: StationMappingItem) => {
        const styleClass = stationStylesMapping[item.forStationsEn];
        return (
            <div className={`${styleClass} ${scssShowStations.stationInfoBase}`}>
                <p className="scssShowStations.title">{item.forStations}</p>
                <p className="scssShowStations.description">{item.forStationsEn}<br />{item.trainClass}</p>
            </div>
        );
    };

    return (
        selectedStation &&
        <div>
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
                            {/* Uncomment the below line to enable the "Add to favorite stations" button */}
                            {/* <Button size="sm" onClick={handleAddFavoriteStation}>よく降りる駅に登録</Button> */}
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
