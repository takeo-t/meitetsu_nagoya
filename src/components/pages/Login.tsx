import { useState } from "react";
import { memo, FC } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

export const Login: FC = memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // ここでログインのロジックを書く
  };

  return (
    <Box as="form" p={5} shadow="md" borderWidth="1px" onSubmit={handleSubmit}>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>

      <FormControl id="password" isRequired mt={6}>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>

      <Button colorScheme="blue" type="submit" width="full" mt={4}>
        Sign In
      </Button>
    </Box>
  );
}
);

export{}