import { Link as ReactLink } from "react-router-dom";
import { Flex, Heading, Text, Button, VStack, Box, Link } from "@chakra-ui/react";

export default function Autenticate() {
  return (
    <Flex flexDirection="column" textAlign="center" height="100%" py={8}>
      <Box py={20}>
        <Heading size="4xl" mb={4}>
          Logo
        </Heading>
        <Heading as="h1">Offline PWA</Heading>
      </Box>

      <VStack mt="auto" mb={6}>
        <Text>Elegí cómo querés ingresar</Text>
        <Button width="full" variant="outline" colorScheme="blackAlpha">
          Continuar con Google
        </Button>

        <Button width="full" variant="outline" colorScheme="blackAlpha">
          Continuar con Facebook
        </Button>
      </VStack>

      <Box>
        <Link to="/authenticate/email" as={ReactLink} fontSize="small">
          Continuar de otra forma
        </Link>
      </Box>
    </Flex>
  );
}
