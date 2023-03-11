import type { Storage } from "@/dashboard/types";

import { Link as ReactLink } from "react-router-dom";
import { LinkBox, LinkOverlay, Heading, Text } from "@chakra-ui/react";

interface Props {
  storage: Storage;
}

export default function StorageCard({ storage }: Props) {
  return (
    <LinkBox borderBottom="1px" borderColor="gray.100" py={2}>
      <Heading as="h2" size="sm">
        <LinkOverlay as={ReactLink} to={`/storages/${storage.id}`}>
          {storage.name}
        </LinkOverlay>
      </Heading>
      <Text fontSize="xs" color="gray.600">
        20-35 min - Envío $145
      </Text>
    </LinkBox>
  );
}
