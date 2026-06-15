import { Box } from "@chakra-ui/react";

import SearchForm from "@/components/search-form";

const HomePage = () => {
  return (
    <Box maxW="1200px" mx="auto" p={8}>
      <SearchForm />
    </Box>
  );
};

export default HomePage;
