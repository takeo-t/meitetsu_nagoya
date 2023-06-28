import { memo, FC, useState, useEffect } from "react";
import { Button, Stack } from '@chakra-ui/react'

import StationsData from "../../StationsData.json";

interface Station {
    id: number;
    lineName: string;
    stationNum: string;
    stationName: string;
    trackNum: string;
    position: string;
    positionColor: string;
    color: string;
  }

  export const Home: FC = memo(() => {
    const [inputValue, setInputValue] = useState("");
    const [stations, setStations] = useState<Station[]>([]);
  
    useEffect(() => {
      const newStations = StationsData.StationsData.map(station => ({
        ...station,
        id: parseInt(station.id, 10),
      }));
      setStations(newStations);
    }, []);
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };
  
    const search = () => {
      if (inputValue === "") {
        setStations(stations);
        return;
      } else {
        const searchedStations = stations.filter(
          (station) =>
            station.stationName !== undefined &&
            station.stationName !== null &&
            station.stationName.toUpperCase().includes(inputValue.toUpperCase())
        );
        setStations(searchedStations);
      }
    };
  return (
    <>
    <Stack spacing={4} direction='row' align='center'>
    <input type="text" value={inputValue} placeholder="駅名を入力" onChange={handleInputChange}/>
    <Button colorScheme='teal' size='xs' onClick={() => search}>検索</Button>
    </Stack>
    </>
  );
});
