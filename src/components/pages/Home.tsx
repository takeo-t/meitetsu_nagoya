import { memo, FC, useState, useEffect } from "react";
import axios from "axios";
import { SearchResults } from "../organisms/SearchResult";
import { Station, StationMappingItem, ChangeStationData } from "../../type";
import { ModalComponent } from "../organisms/ModalComponent";
import { SearchComponent } from "../organisms/SearchComponent";
import { MatchingStationComponent } from "../organisms/MatchingStationComponent";
import { StationCandidates } from "../organisms/StationCandidates";

export const toCamelCase = (str: string) => {
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace("-", "").replace("_", "")
  );
};

export const keysToCamelCase = (obj: any): any => {
  if (obj instanceof Array) {
    return obj.map((v) => keysToCamelCase(v));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        toCamelCase(key),
        keysToCamelCase(value),
      ])
    );
  }
  return obj;
};

export const Home: FC = memo(() => {
  const [inputValue, setInputValue] = useState("");
  const [allStations, setAllStations] = useState<Station[]>([]);
  const [searchResults, setSearchResults] = useState<Station[]>([]);
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [noResults, setNoResults] = useState(false);
  const [changeStationData, setChangeStationData] = useState<{
    data: ChangeStationData[];
  } | null>(null);
  const [matchingStation, setMatchingStation] =
    useState<ChangeStationData | null>(null);

  useEffect(() => {
    axios
      .get("../meitetu_sta.json")
      // axios.get("https://salty-coast-59175-f158b61abb95.herokuapp.com/api/v2/stations")
      .then((response) => {
        const dataCamelCased = keysToCamelCase(response.data.data);
        setAllStations(dataCamelCased);
        console.log(dataCamelCased);
      })
      .catch((error) => {
        alert("読み込みに失敗しました。");
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
      if (station.changeStation) {
        axios
          .get("../change_stations.json")
          // axios.get('https://salty-coast-59175-f158b61abb95.herokuapp.com/api/v2/stations/change_stations')
          .then((response) => {
            console.log("Fetched data:", response.data);
            const dataCamelCased = keysToCamelCase(response.data);
            setChangeStationData(dataCamelCased);
          })
          .catch((error) => {
            console.error("Error fetching change station data:", error);
            console.log(error.response);
          });
      }
    }
  };

  useEffect(() => {
    if (selectedStation && changeStationData && changeStationData.data) {
      const match = changeStationData.data.find(
        (stationData) => stationData.id === selectedStation.id
      );
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

  return (
    <>
      <SearchComponent
        value={inputValue}
        onChange={handleInputChange}
        noResults={noResults}
      />
      <ModalComponent />
      <StationCandidates
        selectedStation={selectedStation}
        searchResults={searchResults}
        handleClick={handleClick}
      />
      <SearchResults
        searchResults={searchResults}
        selectedStation={selectedStation}
        onClick={handleClearInput}
      />
      <MatchingStationComponent matchingStation={matchingStation} />
    </>
  );
});
