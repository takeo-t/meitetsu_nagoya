import { FC, memo } from "react";
import { Box, Button } from "@chakra-ui/react";
import  scssShowStations from "../pages/scssShowStations.module.scss";
import { Station, ChangeStationData, StationMappingItem } from "../../type";
import useAuth from "../../hooks/useAuth";

type StationStylesMappingType = {
    [key: string]: string;
};
export const Favorite: FC = memo(() => {

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
    <>
    <p>よく降りる駅一覧</p>
    {renderStationInfo(item)}
    </>
    )
});