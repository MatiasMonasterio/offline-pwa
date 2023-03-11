import type { LinkProps } from "react-router-dom";

import { Link as ReactLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

interface Props extends LinkProps {
  children: React.ReactNode;
}

export default function UserMenuLink({ children, ...args }: Props) {
  return (
    <Link
      as={ReactLink}
      width="100%"
      p={2}
      display="block"
      _hover={{ textDecoration: "none" }}
      {...args}
    >
      {children}
    </Link>
  );
}
