import { Container, Heading, Box, Avatar, Text, Button } from "@chakra-ui/react";
import { GoBackRow } from "components";

import { useAuthenticateContext } from "@/authenticate/hooks";

export default function Profile() {
  const { authUser, logoutUser } = useAuthenticateContext();

  return (
    <Box>
      <GoBackRow />
      <Container>
        <Box textAlign="center">
          <Avatar name="Matias M. Monasterio" src="" size="lg" mb={4} />

          <Heading as="h1" size="lg">
            Matias M. Monasterio
          </Heading>

          <Text color="gray.500">{authUser?.email}</Text>
        </Box>

        <Box>
          <Button onClick={logoutUser} width="full" justifyContent="start" variant="link" p={2}>
            Cerrar sesión
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
