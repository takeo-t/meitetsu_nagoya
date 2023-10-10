import scssShowStations from "./scssShowStations.module.scss"
import { StationMappingItem,StationStylesMappingType } from "../type";

const forStations: string[] = ['岡崎・豊橋','鳴海・豊明','河和.内海.中部国際空港','大江・太田川','一宮・岐阜','須ヶ口・国府宮','津島・弥富','犬山・可児','西春・岩倉'];
const forStationsEn: string[] = ['Okazaki Toyohashi','Narumi Toyoake','Kowa Utsumi Cen Japan Airport','Oe Otagawa','Ichinomiya Gifu','Sukaguchi Konomiya','Tsushima Yatomi','Inuyama Kani','Nishiharu Iwakura'];
const trainClass: string[] = ['快特・特急・快急・急行・準急','普通'];

export const stationMapping: Record<string, StationMappingItem> = {
            '41': {forStations: forStations[0], forStationsEn: forStationsEn[0], trainClass: trainClass[0]},
            '42': {forStations: forStations[1], forStationsEn: forStationsEn[1], trainClass: trainClass[1]},
            '43': {forStations: forStations[2], forStationsEn: forStationsEn[2], trainClass: trainClass[0]},
            '44': {forStations: forStations[3], forStationsEn: forStationsEn[3], trainClass: trainClass[0]},
            '15': {forStations: forStations[4], forStationsEn: forStationsEn[4], trainClass: trainClass[0]},
            '16': {forStations: forStations[5], forStationsEn: forStationsEn[5], trainClass: trainClass[1]},
            '17': {forStations: forStations[6], forStationsEn: forStationsEn[6], trainClass: trainClass[0]},
            '18': {forStations: forStations[7], forStationsEn: forStationsEn[7], trainClass: trainClass[0]},
            '19': {forStations: forStations[8], forStationsEn: forStationsEn[8], trainClass: trainClass[1]}
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

export const renderStationInfo = (item: StationMappingItem) => {
    const styleClass = stationStylesMapping[item.forStationsEn];
    return (
        <div className={`${styleClass} ${scssShowStations.stationInfoBase}`}>
            <p className="scssShowStations.title">{item.forStations}</p>
            <p className="scssShowStations.description">{item.forStationsEn}<br />{item.trainClass}</p>
        </div>
    );
};