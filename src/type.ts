export interface Station {
    // id: number;
    // lineName: string;
    // stationNum: string;
    // stationName: string;
    // trackNum: string;
    // position: string;
    // positionColor: string;
    // color: string;
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

export interface StationMappingItem {
    forStations: string;
    forStationsEn: string;
    trainClass: string;
}