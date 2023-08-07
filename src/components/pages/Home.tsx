import { memo, FC, useState, useEffect } from "react";
import { Stack, Box, Button, } from '@chakra-ui/react'
import axios from 'axios';

import { SearchInput } from "../../components/organisms/SearchInput";
import { SearchResults } from "../organisms/SearchResult";
import { Station } from "../../type";
import { StationMappingItem } from "../../type";


export const Home: FC = memo(() => {
    const [inputValue, setInputValue] = useState("");
    const [allStations, setAllStations] = useState<Station[]>([]);
    const [searchResults, setSearchResults] = useState<Station[]>([]);
    const [selectedStation, setSelectedStation] = useState<Station | null>(null);
    const [noResults, setNoResults] = useState(false)
    const [favorite, setFavorite] = useState<Station[]>([]);

    const toCamelCase = (str: string) => {
        return str.replace(/([-_][a-z])/g, (group) =>
          group.toUpperCase()
            .replace('-', '')
            .replace('_', '')
        );
      };
    
      const keysToCamelCase = (obj: any): any => {
        if (obj instanceof Array) {
          return obj.map((v) => keysToCamelCase(v));
        } else if (obj !== null && obj.constructor === Object) {
          return Object.fromEntries(
            Object.entries(obj).map(
              ([key, value]) => [toCamelCase(key), keysToCamelCase(value)]
            )
          );
        }
        return obj;
      };

    useEffect(() => {
        // axios.get("http://localhost:3000/api/v1/stations")
        axios.get("http://localhost:3000/api/v2/stations")
        .then(response => {
            console.log(response.data.data);
            const dataCamelCased = keysToCamelCase(response.data.data);
            setAllStations(dataCamelCased);
            console.log(dataCamelCased);
        })
        .catch(error => {
            console.log(error);
            alert('読み込みに失敗しました。')
        });
      }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setNoResults(false)
    };

    const handleSearch = () => {
        search(inputValue)
    }
  
    const search = (input: string) => {
        if (input === "") {
            setSearchResults([]);
            setSelectedStation(null);
            setNoResults(false);
            return;
        } else {
            const searchedStations = allStations.filter(
                (station) =>
                station.stationName !== undefined &&
                station.stationName !== null &&
                station.stationName.toUpperCase().includes(input.toUpperCase())
            );
            setSearchResults(searchedStations);
            if (searchedStations.length === 0) {
                setNoResults(true);
            } else {
            if (searchedStations.length === 1) {
                setSelectedStation(searchedStations[0]);
            } else {
                setSelectedStation(null);
            }
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

    const forStations: string[] = ['岡崎・豊橋','鳴海・豊明','河和.内海.中部国際空港','大江・太田川','一宮・岐阜','須ヶ口・国府宮','津島・弥富','犬山・可児','西春・岩倉'];
    const forStationsEn: string[] = ['Okazaki Toyohashi','Narumi Toyoake','Kowa Utsumi Cen Japan Airport','Oe Otagawa','Ichinomiya Gifu','Sukaguchi Konomiya','Tsushima Yatomi','Inuyama Kani','Nishiharu Iwakura'];
    const trainClass: string[] = ['快特・特急・快急・急行・準急','普通'];
        const stationMapping: Record<string, StationMappingItem> = {
            '41': {forStations: forStations[0], forStationsEn: forStationsEn[0], trainClass: trainClass[0]},
            '42': {forStations: forStations[1], forStationsEn: forStationsEn[1], trainClass: trainClass[1]},
            '43': {forStations: forStations[2], forStationsEn: forStationsEn[2], trainClass: trainClass[0]},
            '44': {forStations: forStations[3], forStationsEn: forStationsEn[3], trainClass: trainClass[0]},
            '15': {forStations: forStations[4], forStationsEn: forStationsEn[4], trainClass: trainClass[0]},
            '16': {forStations: forStations[5], forStationsEn: forStationsEn[5], trainClass: trainClass[1]},
            '17': {forStations: forStations[6], forStationsEn: forStationsEn[6], trainClass: trainClass[0]},
            '18': {forStations: forStations[7], forStationsEn: forStationsEn[7], trainClass: trainClass[0]},
            '19': {forStations: forStations[8], forStationsEn: forStationsEn[8], trainClass: trainClass[0]}
        };

    return (
        <>
        <Box display="flex" justifyContent="center" alignItems="center">
        <h1>降りる駅または最初に乗換えする駅を入力してください。</h1>
        <h2>※対応する駅は名鉄線のみです</h2>
        </Box>
        <Stack spacing={4} direction='column' align='center'>
        <SearchInput value={inputValue} onChange={handleInputChange}/>
        </Stack>
        <Box display="flex" justifyContent="center" alignItems="center">
        <Button py={3} onClick={handleSearch}>検索</Button>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
        <Box>
         <Box mb={5}>
        {noResults && <p>該当する駅が見つかりませんでした。</p>}
        <Box m={5}>
        {searchResults.length >= 1 && !selectedStation && <p>候補の駅を表示します</p>}
        </Box>
        </Box>
        {!selectedStation && searchResults.map((station, index) => (
            <div key={index} onClick={() => handleClick(station)}>
                <Button colorScheme='white' m={2} variant='link'>・{station.stationName}駅</Button>
            </div>
        ))}
        </Box>
        <SearchResults searchResults={searchResults} selectedStation={selectedStation} stationMapping={stationMapping} onClick={handleClearInput}/>
        </Box>
        </>
    );
});
