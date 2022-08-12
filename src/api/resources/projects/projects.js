// External
import { useQueryClient } from "react-query";
import { gql } from "graphql-request";

// Internal
import { useGqlQuery, useGqlMutation } from "api/Api";

// GRAPHQL API

export const useFetchProjectsGql = () => {
  const query = gql`
    query {
      surveys: projects {
        id
        name
        description
        status
        type
        responseCount
        createdAt
        updatedAt
        supportedLocales
      }
    }
  `;

  return useGqlQuery(["projects"], query, {});
};

export const useFetchProjectGql = (id) => {
  const query = gql`
    query {
      survey: project(id: "${id}") {
        id
        name
        description
        status
        type
        responseCount
        createdAt
        updatedAt
        supportedLocales
        scheduledToStartAt
        scheduledToCloseAt
        startedAt
        closedAt
        defaultLocale
        isDeleted
      }
    }
  `;

  return useGqlQuery(["projects", id], query, {});
};

export const useSearchProjectGql = (id, string) => {
  const query = gql`
    query {
      allProjects(filter: {organization_id: "${id}" q: "${string}"}) {
        id
        name
        description
        status
        responses
        owner
        created_at
        updated_at
      }
    }`;

    const queryClient = useQueryClient();
    const options = {
      onError: (err, _project, rollback) => {
        if (rollback) rollback();
      },
      onSettled: () => {
        queryClient.invalidateQueries("projects");
      },
    };

  return useGqlQuery(["users", id], query, options);
};

// export const useCreateProjectGql = () => {
//   const mutation = gql`
//     mutation CreateProject(
//       $name: String!
//       $scheduledToStartAt: String!
//       $scheduledToCloseAt: String!
//       $defaultLocale: String!
//       $status: String!
//       $timezone: String!
//       $type: String!
//       $description: String!
//       $responseCount: String!
//       $organization_id: ID!
//     ) {
//       createProject(
//         name: $name
//         scheduledToStartAt: $scheduledToStartAt
//         scheduledToCloseAt: $scheduledToCloseA
//         defaultLocale: $defaultLocale
//         status: $status
//         timezone: $timezone
//         type: $type
//         description: $description
//         responseCount: $responseCount
//         organization_id: $organization_id
//       ) {
//         id
//       }
//     }
//   `;
//   const queryClient = useQueryClient();
//   const options = {
//     onError: (err, _project, rollback) => {
//       if (rollback) rollback();
//     },
//     onSettled: () => {
//       queryClient.invalidateQueries("projects");
//     },
//   };

//   return useGqlMutation(mutation, options);
// };

export const useCreateProjectGql = () => {
  const mutation = gql`
    mutation CreateProject(
      $data: {!
    ) {
      createProject(
        data: $data
      ) {
        id
      }
    }
  `;
  const queryClient = useQueryClient();
  const options = {
    onError: (err, _project, rollback) => {
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("projects");
    },
  };

  return useGqlMutation(mutation, options);
};

export const useUpdateNumPages = () => {
  const mutation = gql`
    mutation UpdateProject(
      $id: ID!
      $num_pages: Int!
    ) {
      updateProject(
        id: $id
        num_pages: $num_pages
      ) {
        id
      }
    }
  `;
  const queryClient = useQueryClient();
  const options = {
    onError: (err, _project, rollback) => {
      if (rollback) rollback();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
    },
  };

  return useGqlMutation(mutation, options);
};

export const useDeleteProjectGql = () => {
  const mutation = gql`
    mutation RemoveProject($id: ID!) {
      removeProject(id: $id) {
        id
      }
    }
  `;
  const queryClient = useQueryClient();
  const options = {
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
    },
  };

  return useGqlMutation(mutation, options);
};

// REST API
// const uri = "/projects";

// export const useFetchProjects = () => {
//   return useQuery(
//     "projects",
//     () => apiClient.get(`${uri}`).then((res) => res.data),
//     {}
//   );
// };

// export const useFetchProject = (projectId) => {
//   return useQuery(
//     ["projects", projectId],
//     () => apiClient.get(`${uri}/${projectId}`).then((res) => res.data),
//     {}
//   );
// };

// export const useCreateProject = () => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     (values) => apiClient.post(`${uri}`, values).then((res) => res.data),
//     {
//       onMutate: (values) => {
//         console.log("creating project");
//         console.log(values);
//       },
//       onError: (err, _project, rollback) => {
//         console.log(err);
//         if (rollback) rollback();
//       },
//       onSettled: () => {
//         queryClient.invalidateQueries("projects");
//       },
//     }
//   );
// };

// export const useUpdateProject = () => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     (values) =>
//       apiClient.patch(`${uri}/${values.id}`, values).then((res) => res.data),
//     {
//       onMutate: (values) => {
//         // queryClient.setQueriesData(["projects", values.id], values);
//         console.log("updating project", values);
//       },
//       onError: (err, _project, rollback) => {
//         console.log(err);
//         if (rollback) rollback();
//       },
//       onSuccess: () => {
//         queryClient.invalidateQueries(["projects"]);
//       },
//     }
//   );
// };
