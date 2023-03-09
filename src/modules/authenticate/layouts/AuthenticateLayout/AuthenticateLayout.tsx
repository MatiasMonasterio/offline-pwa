import { Outlet } from "react-router-dom";
import { Container } from "@chakra-ui/react";

export default function AuthenticateLayout() {
  return (
    <Container height="100vh">
      <Outlet />
    </Container>
  );
}
