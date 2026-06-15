import { useState } from "react";

import { Field, Input, Button, HStack } from "@chakra-ui/react";
import UserList from "@/components/user-list";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle search submission
    console.log("Searching for:", searchTerm);
    setSearchQuery(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack align="flex-end">
        <Field.Root>
          <Field.Label>Search Users</Field.Label>
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter username..."
          />
        </Field.Root>
        <Button type="submit">Search</Button>
      </HStack>
      <UserList searchQuery={searchQuery} />
    </form>
  );
};

export default SearchForm;
