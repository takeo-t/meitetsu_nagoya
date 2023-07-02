import { memo, FC, useState, useEffect } from "react";
import { Stack, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

// import { ViewStations } from "../molecules/ViewStations";
import StationsData from "../../StationsData.json";
import scssShowStations from "./scssShowStations.module.scss";

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
    const [selectedStation, setSelectedStation] = useState<Station | null>(null);

    useEffect(() => {
        const newStations = StationsData.StationsData.map(station => ({
            ...station,
            id: parseInt(station.id, 10),
        }));
        setAllStations(newStations)
    }, []);
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        search(event.target.value);
    };
  
    const search = (input: string) => {
        if (input === "") {
            setSearchResults([]);
            setSelectedStation(null);
            return;
        } else {
            const searchedStations = allStations.filter(
                (station) =>
                station.stationName !== undefined &&
                station.stationName !== null &&
                station.stationName.toUpperCase().includes(input.toUpperCase())
            );
            setSearchResults(searchedStations);
            if (searchedStations.length === 1) {
                setSelectedStation(searchedStations[0]);
            } else {
                setSelectedStation(null);
            }
        }
    };
  
    const handleClick = (station: Station) => {
        if (selectedStation && selectedStation.id === station.id) {
            setSelectedStation(null);
        } else {
            setSelectedStation(station);
        }
    };

    const handleClearInput = () => {
        setInputValue("");
        setSearchResults([]);
        setSelectedStation(null);
      };

    console.log(selectedStation);
    
    const forStations: string[] = ['岡崎・豊橋','鳴海・豊明','河和.内海.中部国際空港','大江・太田川','一宮・岐阜','須ヶ口・国府宮','津島・弥富','犬山・可児','西春・岩倉'];
    const forStationsEn: string[] = ['Okazaki Toyohashi','Narumi Toyoake','Kowa Utsumi Cen Japan Airport','Oe Otagawa','Ichinomiya Gifu','Sukaguchi Konomiya','Tsushima Yatomi','Inuyama Kani','Nishiharu Iwakura'];
    const trainClass: string[] = ['快特・特急・快急・急行・準急','普通'];
    const stationMapping: Record<string, string[]> = {
        '41': [forStations[0],forStationsEn[0],trainClass[0]],
        '42': [forStations[1],forStationsEn[1],trainClass[1]],
        '43': [forStations[2],forStationsEn[2],trainClass[0]],
        '44': [forStations[3],forStationsEn[3],trainClass[0]],
        '15': [forStations[4],forStationsEn[4],trainClass[0]],
        '16': [forStations[5],forStationsEn[5],trainClass[1]],
        '17': [forStations[6],forStationsEn[6],trainClass[0]],
        '18': [forStations[7],forStationsEn[7],trainClass[0]],
        '19': [forStations[8],forStationsEn[8],trainClass[0]]
    };

    return (
        <>
        <Stack spacing={4} direction='row' align='center'>
        <InputGroup>
        <Input
         placeholder="駅名を入力"
         size='lg'
         variant='filled'
         type="text"
         value={inputValue}
         onChange={handleInputChange}
        color="black"
        my={100}
          _focus={{
           borderColor: 'teal.500',
           boxShadow: '0 0 0 3px teal.500',
           bg: 'gray.100'
         }}
          />

            <InputRightElement width="4.5rem">
                <Button size="sm" onClick={handleClearInput}>クリア</Button>
            </InputRightElement>
          </InputGroup>
        </Stack>
        {searchResults.length >= 2 && !selectedStation && <p>候補の駅を表示します</p>}
        {!selectedStation && searchResults.map((station, index) => (
            <div key={index} onClick={() => handleClick(station)}>
                <p>{station.stationName}駅</p>
            </div>
        ))}
        {selectedStation &&
            <div>
                <h2>検索結果</h2>
                <p>駅名: {selectedStation.stationName}</p>
                <p>路線名: {selectedStation.lineName}</p>
                <p>色: {selectedStation.positionColor}</p>
                乗車位置: {stationMapping[selectedStation.id.toString().substring(0, 2)].map((item, index) => {
                    return (
                        <>
                         {index === 0 && <p key={index} className={scssShowStations.stationInfoBlue}>{item}</p>}
                         {index === 1 && <p key={index} className={scssShowStations.stationInfoYellow}>{item}</p>}
                        </>
                    )
                    })}
            </div>
        }
        </>
    );
});
