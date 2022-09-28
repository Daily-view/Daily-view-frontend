import { Grid, Flex, Text } from "react-daily-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Grid w="100%" h="4rem" bgc="red" templateColumns="repeat(3, 1fr)">
      <Flex ai="center">
        <Link to="/">
          <Text color="white" fontSize="2rem">
            Daily View
          </Text>
        </Link>
      </Flex>
      <Flex jc="center" ai="center">
        <Text color="white" fontSize="2rem">
          Search
        </Text>
      </Flex>
      <Flex gap="6px" jc="flex-end" ai="center">
        <Text color="white" fontSize="2rem">
          Alram
        </Text>
        <Text color="white" fontSize="2rem">
          Chating
        </Text>
        <Text color="white" fontSize="2rem">
          MyProfile
        </Text>
      </Flex>
    </Grid>
  );
};

export default Header;
