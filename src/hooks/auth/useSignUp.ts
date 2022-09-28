import { gql, useMutation } from "@apollo/client";

const query = gql`
  mutation CreateMember(
    $email: String!
    $nickname: String!
    $password: String!
  ) {
    createMember(email: $email, nickname: $nickname, password: $password) {
      email
      nickname
      password
    }
  }
`;

const useSignUp = () => {
  const [createMember, { data, loading, error }] = useMutation(query);

  return { createMember, data, loading, error };
};

export default useSignUp;
