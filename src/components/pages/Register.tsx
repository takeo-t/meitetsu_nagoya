import { useState } from "react";
import { memo, FC } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

export const Register: FC = memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handleSubmit was called"); 
    try {
        const response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: {
              email: email,
              password: password,
              password_confirmation: passwordConfirmation,
            },
          }),
          credentials: 'include',
        });
      
        if (response.ok) {
          const data = await response.json();
          console.log(data);  // レスポンスの内容をログに出力
          alert("Registration successful");
        } else {
          const errorData = await response.json();
          console.error(errorData);  // エラーレスポンスの内容をログに出力
          alert("Registration failed");
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

      <FormControl id="passwordConfirmation" isRequired mt={6}>
        <FormLabel>Confirm Password</FormLabel>
        <Input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
      </FormControl>

      <Button colorScheme="blue" type="submit" width="full" mt={4}>
        Sign Up
      </Button>
    </Box>
  );
});
