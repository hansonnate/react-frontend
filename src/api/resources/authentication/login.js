import { gql } from "graphql-request";
import { useQueryClient } from "react-query";
import { useGqlMutation } from "api/Api";


export const useLoginRequest = () => {
  const mutation = gql`
  mutation Login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      user {
        prefix
        firstName
        lastName
        organizationId
      }
    }
  }
  `;

  const queryClient = useQueryClient();
  const options = {
    onError: (err, _project, rollback) => {
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("login");
    },
  };

  return useGqlMutation(mutation);
};
