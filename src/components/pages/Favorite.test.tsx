import { render } from "@testing-library/react";
import { FavoriteContext, FavoriteContextType } from "../../contexts/FavoriteContext";
import { Favorite } from "./Favorite";

describe("Favorite component", () => {
  const mockStation = {
    lineName: '名古屋本線',
    stationNum: 'NH37',
    stationName: '栄生',
    stationNameKana: 'さこう',
    trackNum: 1,
    position: '一宮・岐阜方面',
    rpdLtdExp: false,
    limitedExp: false,
    rpdExp: false,
    exp: true,
    semiExp: true,
    positionColor: '青',
    color: 'blue',
    changeStation: false,
    id: 150101

  };

  it("should display a message when there's no favorite station", () => {
    const mockFavoriteContext: FavoriteContextType = {
      favoriteStation: null,
      setFavoriteStation: jest.fn(),
      deleteFavoriteStation: null,
      setDeleteFavoriteStation: jest.fn(),
      saveFavoriteStation: jest.fn(),
      destroyFavoriteStation: jest.fn()
    };

    const { getByText } = render(
      <FavoriteContext.Provider value={mockFavoriteContext}>
        <Favorite />
      </FavoriteContext.Provider>
    );

    expect(getByText("お気に入りの駅はありません")).toBeInTheDocument();
  });

  it("should display the favorite station's information when it exists", () => {
    const mockFavoriteContext: FavoriteContextType = {
      favoriteStation: mockStation,
      setFavoriteStation: jest.fn(),
      deleteFavoriteStation: null,
      setDeleteFavoriteStation: jest.fn(),
      saveFavoriteStation: jest.fn(),
      destroyFavoriteStation: jest.fn()
    };

    const { getByText } = render(
      <FavoriteContext.Provider value={mockFavoriteContext}>
        <Favorite />
      </FavoriteContext.Provider>
    );

    expect(getByText(mockStation.id)).toBeInTheDocument();
    expect(getByText(mockStation.stationName)).toBeInTheDocument();
    expect(getByText(mockStation.stationNameKana)).toBeInTheDocument();
  });
});
