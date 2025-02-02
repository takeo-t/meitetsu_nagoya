import { FC } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { Station } from "../../type";
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

    return (
        selectedStation &&
        <Flex justifyContent="center" alignItems="center">
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
                        <Box m={5} display="flex" justifyContent="center" alignItems="center">
                            <Button size="sm" onClick={onClick}>検索結果をクリア</Button>
                        </Box>
                    </>
                );
            })()}
        </Box>
        </Flex>
    );
}
