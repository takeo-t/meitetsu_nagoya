import { memo, FC, useState, useEffect } from "react";
import axios from 'axios';
import { SearchResults } from "../organisms/SearchResult";
import { Station, StationMappingItem, ChangeStationData } from "../../type";
import { ModalComponent } from "../organisms/ModalComponent"
import { SearchComponent } from "../organisms/SearchComponent";
import { MatchingStationComponent } from "../organisms/MatchingStationComponent";
import { StationCandidates } from "../organisms/StationCandidates";


export const Home: FC = memo(() => {
    const [inputValue, setInputValue] = useState("");
    const [allStations, setAllStations] = useState<Station[]>([]);
    const [searchResults, setSearchResults] = useState<Station[]>([]);
    const [selectedStation, setSelectedStation] = useState<Station | null>(null);
    const [noResults, setNoResults] = useState(false)
    const [changeStationData, setChangeStationData] = useState<{ data: ChangeStationData[] } | null>(null);
    const [matchingStation, setMatchingStation] = useState<ChangeStationData | null>(null);

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
        axios.get("http://localhost:3000/api/v2/stations")
        // axios.get("https://salty-coast-59175-f158b61abb95.herokuapp.com/api/v2/stations")
        .then(response => {
            const dataCamelCased = keysToCamelCase(response.data.data);
            setAllStations(dataCamelCased);
            console.log(dataCamelCased);
        })
        .catch(error => {
            alert('読み込みに失敗しました。')
        });
      }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setNoResults(false);
        search(event.target.value);
    };

  
    const search = (input: string) => {
        if (input === "") {
            setSearchResults([]);
            setSelectedStation(null);
            setNoResults(false);
            return;
        } else {
            const searchedStations = allStations.filter(
                (station) =>
                (station.stationName !== undefined &&
                station.stationName !== null &&
                station.stationName.toUpperCase().includes(input.toUpperCase())) ||
                (station.stationNameKana !== undefined &&
                station.stationNameKana !== null &&
                station.stationNameKana.toUpperCase().includes(input.toUpperCase()))
            );
            
            setSearchResults(searchedStations);
            if (searchedStations.length === 0) {
                setNoResults(true);
            } else {
                setSelectedStation(null);
        }
    }
    };
  
    const handleClick = (station: Station) => {
        if (selectedStation && selectedStation.id === station.id) {
            setSelectedStation(null);
            setChangeStationData(null);
        } else {
            setSelectedStation(station);
            if(station.changeStation){
                axios.get('http://localhost:3000/api/v2/stations/change_stations')
                // axios.get('https://salty-coast-59175-f158b61abb95.herokuapp.com/api/v2/stations/change_stations')
                .then(response => {
                    console.log("Fetched data:", response.data);
                    const dataCamelCased = keysToCamelCase(response.data);
                    setChangeStationData(dataCamelCased);
                })
                .catch(error => {
                    console.error("Error fetching change station data:", error);
                    console.log(error.response);
                });
            }
        }
    };

    useEffect(() => {
        if (selectedStation && changeStationData && changeStationData.data) {
            const match = changeStationData.data.find(stationData => stationData.id === selectedStation.id);
            setMatchingStation(match || null);
        } else {
            setMatchingStation(null);
        }
    }, [selectedStation, changeStationData]);
    console.log("Rendering with matchingStation:", matchingStation);


    const handleClearInput = () => {
        setInputValue("");
        setSearchResults([]);
        setSelectedStation(null);
        setChangeStationData(null);
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
            '19': {forStations: forStations[8], forStationsEn: forStationsEn[8], trainClass: trainClass[1]}
        };


    return (
        <>
        <SearchComponent value={inputValue} onChange={handleInputChange} noResults={noResults} />
        <ModalComponent />
        <StationCandidates selectedStation={selectedStation} searchResults={searchResults} handleClick={handleClick}/>
        <SearchResults searchResults={searchResults} selectedStation={selectedStation} stationMapping={stationMapping} onClick={handleClearInput} changeStationData={changeStationData?.data[0] || null}/>
        <MatchingStationComponent matchingStation={matchingStation} />
        </>
    );
});
