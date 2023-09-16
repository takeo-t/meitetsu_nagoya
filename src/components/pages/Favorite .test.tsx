import { render } from "@testing-library/react";
import { FavoriteContext, FavoriteContextType } from "../../contexts/FavoriteContext";
import { Favorite } from "./Favorite";

describe("Favorite component", () => {
  const mockStation = {
    forStations: "渋谷",
    forStationsEn: "Shibuya",
    trainClass: "急行"

  };

  it("should display a message when there's no favorite station", () => {
    const mockFavoriteContext: FavoriteContextType = {
      favoriteStation: null,
      setFavoriteStation: jest.fn()
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
      setFavoriteStation: jest.fn()
    };

    const { getByText } = render(
      <FavoriteContext.Provider value={mockFavoriteContext}>
        <Favorite />
      </FavoriteContext.Provider>
    );

    expect(getByText(mockStation.forStations)).toBeInTheDocument();
    expect(getByText(mockStation.forStationsEn)).toBeInTheDocument();
    expect(getByText(mockStation.trainClass)).toBeInTheDocument();
  });
});
