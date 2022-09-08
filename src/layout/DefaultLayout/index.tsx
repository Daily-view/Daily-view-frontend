import { Flex } from "react-daily-components";
import Header from "./Header";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Flex d="column" height="100vh">
      <Header />
      <Flex flex={1}>
        <LeftBar />
        <Flex flex={1}>{children}</Flex>
        <RightBar />
      </Flex>
    </Flex>
  );
};

export default DefaultLayout;
