import { render } from "@testing-library/react";
import { FavoriteContext, FavoriteContextType } from "../../contexts/FavoriteContext";
import { Favorite } from "./Favorite";

describe("Favorite component", () => {
  const mockStation = {
    id: 100000,
    stationName: 'A駅',
    stationNameKana: 'えー駅',
    lineName: 'A線',
    trackNum: 1

  };

  it("should display a message when there's no favorite station", () => {
    const mockFavoriteContext: FavoriteContextType = {
      favoriteStation: null,
      setFavoriteStation: jest.fn(),
      saveFavoriteStation: jest.fn()
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
      saveFavoriteStation: jest.fn()
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
