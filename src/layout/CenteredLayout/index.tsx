import { Flex } from "react-daily-components";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const CenteredLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Flex w="100vw" h="100vh" jc="center" ai="center">
      {children}
    </Flex>
  );
};

export default CenteredLayout;
