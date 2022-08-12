

import { useQueryClient } from "react-query";
import { gql } from "graphql-request";

import { useGqlQuery, useGqlMutation } from "api/Api";

// GQL API METHODS
export const useFetchQuestionsGql = (projectId) => {
  const query = gql`
    query {
      project(id: "${projectId}") {
        id
        name
        question {
          description
          pageOrderIndex
          pageNumber
          type
          description
          questionTypeConfig {
            choiceQuestion {
              isMultiSelect
              isRandomized
              hasOtherOption
              otherOptionLabel
              choice {
                id
                choiceText
              }
            }
            scaleQuestion {
              min
              minDescription
              max
              maxDescription
              step
            }
            textQuestion {
              placeholder
            }
          }
          questionText
        }
      }
    }
  `;

  return useGqlQuery(["projects", projectId, "questions"], query, {});
};

export const useFetchQuestionGql = (questionId, projectId = null) => {
  const query = gql`
    query {
      question(id: "${questionId}" ) {
        id
        name
        type
        description
        instructions
        otherOptionText
        project_id
        naOption
        Choices {
          id
          choice_value
        }
        question_type_config
      }
    }`;

  let options = {};
  const queryClient = useQueryClient();
  if (projectId) {
    options = {
      initialData: () => {
        return queryClient
          .getQueryData(["projects", projectId, "questions"])
          ?.find((d) => d.id == questionId);
      },
    };
  }

  return useGqlQuery(["questions", questionId], query, [], options);
};

export const useCreateQuestionGql = () => {
  const mutation = gql`
    mutation CreateQuestion(
      $data: QuestionInput!
    ) {
      createQuestion(
        data: $data
      ) {
        questionText
      }
    }
  `;
  const queryClient = useQueryClient();
  const options = {
    onError: (err, _project, rollback) => {
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("questions");
    },
    // onSuccess: (data) => {
    //   console.log("Heck Yeah!");
    //   console.log(data);
    // },
  };

  return useGqlMutation(mutation, options);
};

export const useDeleteQuestion = () => {
  const mutation = gql`
    mutation RemoveQuestion(
      $id: ID!
    ) {
      removeQuestion(
        id: $id
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
      queryClient.invalidateQueries("questions");
    },
    // onSuccess: (data) => {
    //   console.log("Heck Yeah!");
    //   console.log(data);
    // },
  };

  return useGqlMutation(mutation, options);
};

export const useUpdateQuestionName = () => {
  const mutation = gql`
    mutation UpdateQuestion(
      $id: ID!
      $name: String
    ) {
      updateQuestion(
        id: $id
        name: $name
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
      queryClient.invalidateQueries("questions");
    },
    // onSuccess: (data) => {
    //   console.log("Heck Yeah!");
    //   console.log(data);
    // },
  };

  return useGqlMutation(mutation, options);
};

export const useUpdateQuestionInstructions = () => {
  const mutation = gql`
    mutation UpdateQuestion(
      $id: ID!
      $instructions: String
    ) {
      updateQuestion(
        id: $id
        instructions: $instructions
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
      queryClient.invalidateQueries("questions");
    },
    // onSuccess: (data) => {
    //   console.log("Heck Yeah!");
    //   console.log(data);
    // },
  };

  return useGqlMutation(mutation, options);
};

export const useUpdateQuestionConfig = () => {
  const mutation = gql`
    mutation UpdateQuestion(
      $id: ID!
      $question_type_config: JSON
    ) {
      updateQuestion(
        id: $id
        question_type_config: $question_type_config
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
      queryClient.invalidateQueries("questions");
    },
    // onSuccess: (data) => {
    //   console.log("Heck Yeah!");
    //   console.log(data);
    // },
  };

  return useGqlMutation(mutation, options);
};

export const useUpdateQuestionNAOption = () => {
  const mutation = gql`
    mutation UpdateQuestion(
      $id: ID!
      $naOption: Boolean
    ) {
      updateQuestion(
        id: $id
        naOption: $naOption
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
      queryClient.invalidateQueries("questions");
    },
    // onSuccess: (data) => {
    //   console.log("Heck Yeah!");
    //   console.log(data);
    // },
  };

  return useGqlMutation(mutation, options);
};
export const useUpdateQuestionType = () => {
  const mutation = gql`
    mutation UpdateQuestion(
      $id: ID!
      $type: String
      $question_type_config: JSON
    ) {
      updateQuestion(
        id: $id
        type: $type
        question_type_config: $question_type_config
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
      queryClient.invalidateQueries("questions");
    },
    // onSuccess: (data) => {
    //   console.log("Heck Yeah!");
    //   console.log(data);
    // },
  };

  return useGqlMutation(mutation, options);
};


export const useCreatePage = () => {
  const mutation = gql`
    mutation CreatePage(
      $project_id: ID!
      $page_num: Int!
    ) {
      createPage(
        project_id: $project_id
        page_num: $page_num
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

export const useUpdateQuestionGql = () => {
  const mutation = gql`
    mutation UpdateQuestion($values: QuestionInput!) {
      updateQuestion(values: $values) {
        title
        instructions
      }
    }
  `;

  const queryClient = useQueryClient();
  const options = {
    onError: (err, _project, rollback) => {
      console.log(err);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries("questions");
    },
  };

  return useGqlMutation(mutation, [], options);
};



// REST API METHODS
// const uri = "/questions";

// export const useFetchQuestions = (projectId) => {
//   return useQuery(
//     ["projects", projectId, "questions"], // Cache key
//     () =>
//       apiClient.get(`${uri}?projectId=${projectId}`).then((res) => res.data), // Query function
//     {
//       // Query config
//     }
//   );
// };

// export const useFetchQuestion = (questionId) => {
//   return useQuery(
//     ["questions", questionId],
//     () => apiClient.get(`${uri}/${questionId}`).then((res) => res.data),
//     {}
//   );
// };

// export const useCreateQuestion = (projectId) => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     (values) => apiClient.post(`${uri}`, values).then((res) => res.data),
//     {
//       onMutate: (values) => {
//         console.log("creating question");
//         console.log(values);
//       },
//       onError: (err, _project, rollback) => {
//         console.log(err);
//         if (rollback) rollback();
//       },
//       onSettled: () => {
//         queryClient.invalidateQueries(["projects", projectId, "questions"]);
//       },
//     }
//   );
// };

// export const useUpdateQuestion = (projectId) => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     (values) =>
//       apiClient.patch(`${uri}/${values.id}`, values).then((res) => res.data),
//     {
//       onError: (err, _project, rollback) => {
//         console.log(err);
//         if (rollback) rollback();
//       },
//       onSuccess: () => {
//         queryClient.invalidateQueries(["projects", projectId, "questions"]);
//       },
//     }
//   );
// };

// export const useDeleteQuestion = (projectId) => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     (questionId) =>
//       apiClient.delete(`${uri}/${questionId}`).then((res) => res.data),
//     {
//       onError: (err, _project, rollback) => {
//         console.log(err);
//         if (rollback) rollback();
//       },
//       onSuccess: () => {
//         queryClient.invalidateQueries(["projects", projectId, "questions"]);
//       },
//     }
//   );
// };

// export const useFetchQuestionChoices = (projectId, questionId) => {
//   return useQuery(
//     ["projects", projectId, "questions", questionId, "choices"],
//     () =>
//       apiClient
//         .get(`/questions/${questionId}?_embed=choices&projectId=${projectId}`)
//         .then((res) => res.data.choices),
//     {}
//   );
// };

// export const useUpdateQuestionChoices = (projectId, questionId) => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     (values) =>
//       apiClient.patch(`/choices/${values.id}`, values).then((res) => res.data),
//     {
//       onMutate: (values) => {
//         // queryClient.setQueriesData(
//         //   ["projects", projectId, "questions", questionId, "choices"],

//         // );
//         console.log(values, questionId);
//       },
//       onError: (err, _project, rollback) => {
//         console.log(err);
//         if (rollback) rollback();
//       },
//       onSuccess: () => {
//         queryClient.invalidateQueries(["projects", projectId, "questions"]);
//       },
//     }
//   );
// };

// export const useCreateQuestionChoice = (projectId, questionId) => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     (values) => apiClient.post(`/choices`, values).then((res) => res.data),
//     {
//       onMutate: (values) => {
//         console.log("creating question", values);
//       },
//       onError: (err, _project, rollback) => {
//         console.log(err);
//         if (rollback) rollback();
//       },
//       onSettled: () => {
//         queryClient.invalidateQueries([
//           "projects",
//           projectId,
//           "questions",
//           questionId,
//           "choices",
//         ]);
//       },
//     }
//   );
// };

// export const useDeleteQuestionChoice = (projectId, questionId) => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     (values) =>
//       apiClient.delete(`/choices/${values.id}`).then((res) => res.data),
//     {
//       onMutate: () => {
//         console.log("deleting question");
//       },
//       onError: (err, _project, rollback) => {
//         console.log(err);
//         if (rollback) rollback();
//       },
//       onSettled: () => {
//         queryClient.invalidateQueries([
//           "projects",
//           projectId,
//           "questions",
//           questionId,
//           "choices",
//         ]);
//       },
//     }
//   );
// };


