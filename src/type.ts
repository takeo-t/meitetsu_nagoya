export interface Station {
    lineName: string;
    stationNum: string;
    stationName: string;
    stationNameKana: string;
    trackNum: number;
    position: string;
    rpdLtdExp: boolean;
    limitedExp: boolean;
    rpdExp: boolean;
    exp: boolean;
    semiExp: boolean;
    positionColor: string;
    color: string;
    changeStation: boolean;
    id: number;
}

export interface ChangeStationData {
    id: number;
    changeStation: string;
    changeStationKana: string;
    changeOnTrain: string;
}

export interface StationMappingItem {
    forStations: string;
    forStationsEn: string;
    trainClass: string;
}