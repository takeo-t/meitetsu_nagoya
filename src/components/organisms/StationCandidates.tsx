import { FC } from "react";
import { Button } from "@chakra-ui/react";

import { Station } from "../../type"; 

interface StationCandidatesProps {
    selectedStation: Station | null;
    searchResults: Station[];
    handleClick: (Station: Station) => void;
}

export const StationCandidates: FC<StationCandidatesProps> = ({ selectedStation, searchResults, handleClick}) => {
    return (
        <>
        { !selectedStation && 
                searchResults.map((station, index) => (
                    <div key={index} onClick={() => handleClick(station)}>
                        <Button colorScheme='white' m={2} variant='link'>{station.stationName}駅<br />({station.stationNameKana})</Button>
                    </div>
                ))
            }
        </>
    );
}