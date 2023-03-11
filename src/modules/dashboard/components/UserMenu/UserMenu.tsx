import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button, Drawer, Box, Heading, Avatar } from "@chakra-ui/react";
import { DrawerOverlay, DrawerContent, DrawerBody, DrawerHeader } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";

import { UserMenuLink } from "@/dashboard/components";

export default function UserMenu() {
  const buttonRef = useRef(null);
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (isOpen) onClose();
  }, [location]);

  return (
    <Box mb={2}>
      <Button variant="link" size="xs" ref={buttonRef} onClick={onOpen}>
        <HamburgerIcon fontSize="lg" />
      </Button>

      <Drawer placement="left" isOpen={isOpen} onClose={onClose} finalFocusRef={buttonRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader textAlign="center" py={6}>
            <Avatar name="Matias M. Monasterio" src="" size="xl" mb={4} />
            <Heading as="h4" size="lg">
              Matias M. Monasterio
            </Heading>
          </DrawerHeader>

          <DrawerBody>
            <UserMenuLink to="/#inicio">Inicio</UserMenuLink>
            <UserMenuLink to="/#pedidos">Mis pedidos</UserMenuLink>
            <UserMenuLink to="/#fav">Mis favoritos</UserMenuLink>
            <UserMenuLink to="/#profile">Mi Perfil</UserMenuLink>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
