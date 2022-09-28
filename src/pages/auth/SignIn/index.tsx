import CenteredLayout from "layout/CenteredLayout";
import { Button, Flex, TextField } from "react-daily-components";

const SignIn = () => {
  return (
    <CenteredLayout>
      <Flex d="column" w="" gap="10px">
        <TextField label="email" placeholder="email" />
        <TextField label="id" placeholder="id" />
        <TextField label="password" placeholder="password" />
        <Button>로그인</Button>
      </Flex>
    </CenteredLayout>
  );
};

export default SignIn;
