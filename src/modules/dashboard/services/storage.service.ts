import type { Storage } from "@/dashboard/types";
import { storagesMock } from "@/dashboard/__mocks__";

export default {
  getAll: async (): Promise<Storage[]> => {
    return storagesMock;
  },
  search: async (storageName: string) => {
    const storageNameSearch = storageName.toLowerCase();

    return storagesMock.filter((storage) => {
      const currName = storage.name.toLowerCase();
      return currName.includes(storageNameSearch);
    });
  },
};
