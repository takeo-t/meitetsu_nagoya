import { render, screen, fireEvent } from '@testing-library/react';
import { SearchResults } from './SearchResult';

describe('SearchResults', () => {
    let mockOnClick: jest.Mock;
    let testProps: any;
  
    beforeEach(() => {
      mockOnClick = jest.fn();
  

    testProps = {
    selectedStation: {
        id: 10,
        lineName: 'TestLine',
        stationNum: '1',
        stationName: 'TestStation',
        stationNameKana: 'Test',
        trackNum: 1,
        positionColor: 'Blue',
        position: 'TestPosition',
        rpdLtdExp: true,
        limitedExp: true,
        rpdExp: true,
        exp: true,
        semiExp: true,
        color: 'Blue',
        changeStation: true,
      },
    stationMapping: {
      '41': {
        forStations: '岡崎・豊橋',
        forStationsEn: 'Okazaki Toyohashi',
        trainClass: '快特・特急・快急・急行・準急',
      },
    },
    searchResults: [],
    changeStationData: null,
    onClick: mockOnClick,
  };
});

  it('should render station information correctly', () => {
    render(<SearchResults {...testProps} />);

    expect(screen.getByText('駅名: TestStation(Test)駅')).toBeInTheDocument();
    expect(screen.getByText('路線名: TestLine')).toBeInTheDocument();
    expect(screen.getByText('到着ホーム: 1番ホーム')).toBeInTheDocument();
  });

  it('should call onClick when "検索結果をクリア" button is clicked', () => {
    render(<SearchResults {...testProps} />);

    fireEvent.click(screen.getByText('検索結果をクリア'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
