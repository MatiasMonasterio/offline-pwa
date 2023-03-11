import type { SearchValue } from "types";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { Button, chakra } from "@chakra-ui/react";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";

interface Props {
  placeholder?: string;
  onSearch: (searchValue: SearchValue) => void;
  onReseat: () => void;
}

const SEARCH_KEY = "search";

export default function InputSearch({ placeholder, onSearch, onReseat }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setSearchParams({ [SEARCH_KEY]: event.target.value });
  };

  const handleClearSearch = () => {
    setInputValue("");
    setSearchParams("");
    onReseat();
  };

  useEffect(() => {
    const initialSearchValue = searchParams.get(SEARCH_KEY);
    if (initialSearchValue) setInputValue(initialSearchValue);
  }, []);

  return (
    <chakra.form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />

        <Input
          value={inputValue}
          placeholder={placeholder}
          _placeholder={{ color: "gray.300" }}
          onChange={handleChange}
        />

        {inputValue && (
          <InputRightElement
            pointerEvents="painted"
            children={
              <Button variant="link" height="100%" onClick={handleClearSearch}>
                <SmallCloseIcon color="gray.300" />
              </Button>
            }
          />
        )}
      </InputGroup>
    </chakra.form>
  );
}
