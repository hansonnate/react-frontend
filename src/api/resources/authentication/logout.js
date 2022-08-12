import { gql } from "graphql-request";
import { useQueryClient } from "react-query";
import { useGqlMutation } from "api/Api";


export const useLogoutRequest = () => {
  const mutation = gql`
  mutation Logout {
    logout
  }
  `;
  const queryClient = useQueryClient();
  queryClient.removeQueries;
  return useGqlMutation(mutation);
};
