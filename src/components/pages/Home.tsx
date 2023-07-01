import { memo, FC, useState, useEffect } from "react";
import { Button, Stack, Input } from '@chakra-ui/react'

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
    const [allStations, setAllStations] = useState<Station[]>([]);
    const [searchResults, setSearchResults] = useState<Station[]>([]);
  
    useEffect(() => {
      const newStations = StationsData.StationsData.map(station => ({
        ...station,
        id: parseInt(station.id, 10),
      }));
      setAllStations(newStations);
    }, []);
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };
  
    const search = () => {
      if (inputValue === "") {
        setSearchResults([]);
        return;
      } else {
        const searchedStations = allStations.filter(
          (station) =>
            station.stationName !== undefined &&
            station.stationName !== null &&
            station.stationName.toUpperCase().includes(inputValue.toUpperCase())
        );
        setSearchResults(searchedStations);
      }
    };
  return (
    <>
    <Stack spacing={4} direction='row' align='center'>
    <Input
    placeholder="駅名を入力"
    size='lg'
    variant='filled'
    type="text" value={inputValue}
    onChange={handleInputChange}
    color="black"
    my={100}
    />
    <Button colorScheme='teal' size='xs' onClick={search} p={6}>検索</Button>
    </Stack>
    {searchResults.map((station, index) => (
        <div key={index}>
            <p>{station.id}</p>
        </div>
    ))}
    </>
  );
});
