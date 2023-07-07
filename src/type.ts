export interface Station {
    id: number;
    lineName: string;
    stationNum: string;
    stationName: string;
    trackNum: string;
    position: string;
    positionColor: string;
    color: string;
}

export interface StationMappingItem {
    forStations: string;
    forStationsEn: string;
    trainClass: string;
}