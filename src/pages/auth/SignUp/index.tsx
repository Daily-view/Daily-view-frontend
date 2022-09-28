import useSignUp from "hooks/auth/useSignUp";
import CenteredLayout from "layout/CenteredLayout";
import { useState } from "react";
import { Flex, TextField, Button } from "react-daily-components";

type Params = {
  [index: string]: string;
  email: string;
  nickname: string;
  password: string;
};

const SignUp = () => {
  const { createMember, data, loading, error } = useSignUp();
  const [signup] = useState<Params>({
    email: "",
    nickname: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    signup[e.target.name] = e.target.value;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createMember({ variables: { ...signup } });
  };

  return (
    <CenteredLayout>
      <Flex d="column" w="" gap="10px">
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <TextField
            label="email"
            name="email"
            defaultValue={signup.email}
            placeholder="enter your email"
          />
          <TextField
            label="id"
            name="id"
            defaultValue={signup.nickname}
            placeholder="enter your id"
          />
          <TextField
            label="password"
            name="password"
            defaultValue={signup.password}
            placeholder="enter your password"
          />
          <Button>로그인</Button>
        </form>
      </Flex>
    </CenteredLayout>
  );
};

export default SignUp;
