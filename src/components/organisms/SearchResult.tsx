// import { FC } from "react";
// import { Station } from "../../type";

// interface SearchResultsProps {
//     searchResults: Station[];
//     selectedStation: Station | null;
// }

// export const SearchResults: FC<> = ({}) => {
// {selectedStation &&
//     <div>
//         <Box mb={5}>検索結果</Box>
//         <p>駅名: {selectedStation.stationName}</p>
//         <p>路線名: {selectedStation.lineName}</p>
//         <Box mt={5}>下記表示の{selectedStation.positionColor}色乗車位置に並んでください。</Box>
//         {(() => {
//     const item = stationMapping[selectedStation.id.toString().substring(0, 2)];
//     return (
//         <>
//         {item.forStationsEn === "Okazaki Toyohashi" &&
//         <div className={scssShowStations.stationInfoBlue}>
//             <p style={{fontSize: "30px"}}>{item.forStations}</p>
//             <p>{item.forStationsEn}<br />{item.trainClass}</p>
//             </div>}
//         {item.forStationsEn === "Narumi Toyoake" &&
//         <div className={scssShowStations.stationInfoYellow}>
//             <p style={{fontSize: "30px"}}>{item.forStations}</p>
//             <p>{item.forStationsEn}<br />{item.trainClass}</p>
//             </div>}
//         {item.forStationsEn === "Kowa Utsumi Cen Japan Airport" &&
//         <div className={scssShowStations.stationInfoGreen}>
//             <p style={{fontSize: "25px"}}>{item.forStations}</p>
//             <p>{item.forStationsEn}<br />{item.trainClass}</p>
//             </div>}
//         {item.forStationsEn === "Oe Otagawa" &&
//         <div className={scssShowStations.stationInfoLightBlue}>
//             <p style={{fontSize: "30px"}}>{item.forStations}</p>
//             <p>{item.forStationsEn}<br />{item.trainClass}</p>
//             </div>}
//         {item.forStationsEn === "Ichinomiya Gifu" &&
//         <div className={scssShowStations.stationInfoBlue}>
//             <p style={{fontSize: "30px"}}>{item.forStations}</p>
//             <p>{item.forStationsEn}<br />{item.trainClass}</p>
//             </div>}
//         {item.forStationsEn === "Sukaguchi Konomiya" &&
//         <div className={scssShowStations.stationInfoYellow}>
//             <p style={{fontSize: "30px"}}>{item.forStations}</p>
//             <p>{item.forStationsEn}<br />{item.trainClass}</p>
//             </div>}
//         {item.forStationsEn === "Tsushima Yatomi" &&
//         <div className={scssShowStations.stationInfoPurple}>
//             <p style={{fontSize: "30px"}}>{item.forStations}</p>
//             <p>{item.forStationsEn}<br />{item.trainClass}</p>
//             </div>}
//         {item.forStationsEn === "Inuyama Kani" &&
//         <div className={scssShowStations.stationInfoGreen}>
//             <p style={{fontSize: "30px"}}>{item.forStations}</p>
//             <p>{item.forStationsEn}<br />{item.trainClass}</p>
//             </div>}
//         {item.forStationsEn === "Nishiharu Iwakura" &&
//         <div className={scssShowStations.stationInfoLightBlue}>
//             <p style={{fontSize: "30px"}}>{item.forStations}</p>
//             <p>{item.forStationsEn}<br />{item.trainClass}</p>
//             </div>}
//             <Box display="flex" justifyContent="center" alignItems="center">
//             <Button size="sm" onClick={handleClearInput}>検索結果をクリア</Button>
//             </Box>
//         </>
//     );
// })()}
//     </div>
// }
// }