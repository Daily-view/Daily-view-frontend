import { Flex, Text } from "react-daily-components";
import { Link } from "react-router-dom";

const LeftBar = () => {
  return (
    <Flex d="column" width="20rem" height="100%" bgc="blue">
      <Link to="/">
        <Text color="white" fontSize="2rem">
          home
        </Text>
      </Link>
      <Link to="/profile/me">
        <Text color="white" fontSize="2rem">
          alarm
        </Text>
      </Link>
      <Link to="/chating">
        <Text color="white" fontSize="2rem">
          chating
        </Text>
      </Link>
      <Link to="/profile/me">
        <Text color="white" fontSize="2rem">
          my profile
        </Text>
      </Link>
      <Link to="/setting">
        <Text color="white" fontSize="2rem">
          setting
        </Text>
      </Link>
    </Flex>
  );
};

export default LeftBar;
