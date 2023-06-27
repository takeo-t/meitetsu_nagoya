import { memo, FC, useState } from "react";
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
  
  let stations = StationsData.StationsData;
  
  let newStations: Station[] = stations.map(station => ({
    ...station,
    id: parseInt(station.id, 10),
  }));

export const Home: FC = memo(() => {
  const [ showStations, setShowStations ] = useState(newStations);
  const [ inputValue, setInputValue ] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    }
  const clear = () => {
      (setInputValue(''));
     }

    const search = (value) => {

      if(value === ""){
        setShowStations(newStations);
          return
      } else {
        const searchedStations = stations.filter(
          (station) =>
            station.stationName !== undefined &&
            station.stationName !== null &&
            station.stationName.toUpperCase().indexOf(value.toUpperCase()) !== -1
        );
      setShowStations(searchedStations);
        };
    };
  return (
    <>
    <Stack spacing={4} direction='row' align='center'>
    <input type="text" value={inputValue} placeholder="駅名を入力" onChange={handleInputChange}/>
    <Button colorScheme='teal' size='xs'>検索</Button>
    </Stack>
    {showStations.length === 0 && (<p style ={{color: 'red'}}>名鉄線以外の駅は非対応です。</p>)}
    </>
  );
});
