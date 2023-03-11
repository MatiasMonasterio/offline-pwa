import type { SearchValue } from "types";
import type { Storage } from "@/dashboard/types";

import { useEffect, useState } from "react";
import { Container, Heading, Box } from "@chakra-ui/react";
import { InputSearch } from "components";

import { StorageCard, UserMenu } from "@/dashboard/components";
import { storageService } from "@/dashboard/services";

export default function Home() {
  const [storages, setStorages] = useState<Storage[]>([]);

  const handleReseatSearch = () => {
    getAllStorages();
  };

  const handleSearchStorage = (searchValue: SearchValue) => {
    storageService
      .search(searchValue)
      .then((storages) => setStorages(storages))
      .catch((error) => console.error(error));
  };

  const getAllStorages = () => {
    storageService
      .getAll()
      .then((storages) => setStorages(storages))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllStorages();
  }, []);

  return (
    <>
      <Box py={2} boxShadow="md" mb={6} position="sticky" top={0} bgColor="white">
        <Container>
          <UserMenu />

          <InputSearch
            placeholder="Qué te tienta hoy?"
            onSearch={handleSearchStorage}
            onReseat={handleReseatSearch}
          />
        </Container>
      </Box>

      <Container>
        <Heading size="xs" fontWeight="light" mb={2}>
          391 locales
        </Heading>

        {storages.map((storage) => (
          <StorageCard key={storage.id} storage={storage} />
        ))}
      </Container>
    </>
  );
}
