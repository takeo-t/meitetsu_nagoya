import React, { FC } from "react";
import { ChangeStationData } from "../../type";
type MatchingStationProps = {
    matchingStation: ChangeStationData | null;
}

export const MatchingStationComponent: FC<MatchingStationProps> = ({ matchingStation }) => {
    return (
        matchingStation && (
            <p>⚠️{matchingStation.changeTrain}に乗車して{matchingStation.changeStation}駅で<br />{matchingStation.changeOnTrain}電車に乗り換えしてください。</p>
        )
    );
}

