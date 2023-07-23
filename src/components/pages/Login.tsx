import { useState } from "react";
import { memo, FC } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

export const Login: FC = memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          credentials: 'include',
        });
      
        if (response.ok) {
          const data = await response.json();
          console.log(data);  // レスポンスの内容をログに出力
          alert("ログイン成功");
        } else {
          const errorData = await response.json();
          console.error(errorData);  // エラーレスポンスの内容をログに出力
          alert("ログイン失敗");
        }
      } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred. Please try again.");
      }
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