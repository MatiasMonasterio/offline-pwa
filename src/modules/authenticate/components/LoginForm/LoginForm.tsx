import type { FormEvent } from "react";
import type { LoginEmailForm } from "@/authenticate/types";

import { Link as ReactLink } from "react-router-dom";
import { Box, Flex, Input, VStack, Link, Button } from "@chakra-ui/react";

interface Props {
  onSubmit: (formValue: LoginEmailForm) => void;
}

export default function LoginForm({ onSubmit }: Props) {
  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    console.log({ event });
    onSubmit({ email: "", password: "" });
  };

  return (
    <Flex as="form" flexDirection="column" height="100%" onSubmit={handleSubmit}>
      <Box mb="auto">
        <VStack p={4} bgColor="gray.100" borderRadius="md" gap={4} mb={2}>
          <Input type="email" placeholder="E-mail" variant="flushed" name="email" />
          <Input type="password" placeholder="Contraseña" variant="flushed" name="password" />
        </VStack>

        <Link as={ReactLink} to="/authenticate/forgot-password" fontSize="small">
          Olvidé mi contraseña
        </Link>
      </Box>

      <Button width="full">Continuar</Button>
    </Flex>
  );
}
