import type { LoginEmailForm } from "@/authenticate/types";

import { useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import { Box, Input, VStack, Link, Button, chakra } from "@chakra-ui/react";

interface Props {
  onSubmit: (formValue: LoginEmailForm) => void;
}

const initialValue: LoginEmailForm = {
  email: "",
  password: "",
};

export default function LoginForm({ onSubmit }: Props) {
  const [formValue, setFormValue] = useState(initialValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValue((currValue) => ({ ...currValue, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formValue);
  };

  return (
    <chakra.form
      as="form"
      display="flex"
      flexDirection="column"
      height="100%"
      onSubmit={handleSubmit}
    >
      <Box mb="auto">
        <VStack p={4} bgColor="gray.100" borderRadius="md" gap={4} mb={2}>
          <Input
            type="email"
            placeholder="E-mail"
            variant="flushed"
            name="email"
            onChange={handleInputChange}
          />
          <Input
            type="password"
            placeholder="Contraseña"
            variant="flushed"
            name="password"
            onChange={handleInputChange}
          />
        </VStack>

        <Link as={ReactLink} to="/authenticate/forgot-password" fontSize="small">
          Olvidé mi contraseña
        </Link>
      </Box>

      <Button width="full" type="submit">
        Continuar
      </Button>
    </chakra.form>
  );
}
