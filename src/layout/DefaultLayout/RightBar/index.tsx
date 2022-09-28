import { Flex, Text } from "react-daily-components";
import { Link } from "react-router-dom";

const RightBar = () => {
  return (
    <Flex d="column" width="20rem" height="100%" bgc="blue">
      <Link to="/profile/1">
        <Text color="white" fontSize="2rem">
          frient1
        </Text>
      </Link>
      <Link to="/profile/2">
        <Text color="white" fontSize="2rem">
          frient2
        </Text>
      </Link>
      <Link to="/profile/3">
        <Text color="white" fontSize="2rem">
          frient3
        </Text>
      </Link>
      <Link to="/profile/4">
        <Text color="white" fontSize="2rem">
          frient4
        </Text>
      </Link>
    </Flex>
  );
};

export default RightBar;
