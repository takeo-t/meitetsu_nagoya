import { FC } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ChangeStationData } from "../../type";
type MatchingStationProps = {
    matchingStation: ChangeStationData | null;
}

export const MatchingStationComponent: FC<MatchingStationProps> = ({ matchingStation }) => {
    return (
        <Flex justifyContent="center" alignItems="center">
        <Box mb={5} fontSize={['sm', 'md', 'lg']}>
            {matchingStation && (
            <p>⚠️{matchingStation.changeTrain}に乗車して{matchingStation.changeStation}駅で<br />{matchingStation.changeOnTrain}電車に乗り換えしてください。</p>
        )}
        </Box>
        </Flex>
    );
}

