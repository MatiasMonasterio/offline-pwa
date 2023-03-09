import type { LoginEmailForm } from "@/authenticate/types";

import { Heading, Flex, Text, Box } from "@chakra-ui/react";
import { GoBackRow } from "components";

import { LoginForm } from "@/authenticate/components";

export default function Email() {
  const handleLogin = (loginForm: LoginEmailForm) => {
    console.log(loginForm);
  };

  return (
    <Flex flexDirection="column" height="100%" pb={6}>
      <GoBackRow />

      <Box mb={4}>
        <Heading as="h2" size="lg">
          Inicía sesión con tu e-mail
        </Heading>
        <Text fontSize="sm">Solo podrás usar este método si ya tenías registrada una cuenta</Text>
      </Box>

      <Box flexGrow={1}>
        <LoginForm onSubmit={handleLogin} />
      </Box>
    </Flex>
  );
}
