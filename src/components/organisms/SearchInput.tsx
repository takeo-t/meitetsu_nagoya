import { FC, ChangeEvent } from "react";
import { Input, Box } from "@chakra-ui/react";

interface SearchInputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: FC<SearchInputProps> = ({ value, onChange }) => {
    return (
        <>
        <Box w="80%" mt={10}>
        <p>発駅</p>
        <Input
         placeholder="名鉄名古屋駅"
         size='md'
         variant='filled'
         type="text"
        isDisabled
          />
        </Box>
        <p>↓</p>
        <Box w="80%">
        <p>着駅</p>
        <Input
         placeholder="駅名を入力"
         size='md'
         variant='filled'
         type="text"
         value={value}
         onChange={onChange}
        color="black"
        mr={20}
        mb={20}
          _focus={{
           borderColor: 'teal.500',
           boxShadow: '0 0 0 3px teal.500',
           bg: 'gray.100'
         }}
          />
          </Box>
        </>
    )
}