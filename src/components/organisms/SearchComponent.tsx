import React, { FC } from "react";
import { Box, Stack } from '@chakra-ui/react';

import { SearchInput } from "./SearchInput";

type SearchComponentProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  noResults: boolean;
};

export const SearchComponent: FC<SearchComponentProps> = ({ value, onChange, noResults }) => {
  return (
    <Stack spacing={4} direction='column' align='center'>
      <SearchInput value={value} onChange={onChange} />

      <Box display="flex" justifyContent="center" alignItems="center">
        {noResults && <p>該当する駅が見つかりませんでした。</p>}
        {value.length >= 1 && !noResults && <p>候補の駅を表示します</p>}
      </Box>
    </Stack>
  );
};

