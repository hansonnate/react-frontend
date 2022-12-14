import { GraphQLClient } from "graphql-request";
import { useQuery, useMutation, useSubscription } from "react-query";

// import bodyParser from 'body-parser';

// var jsonParser       = bodyParser.json({limit:1024*1024*2000, type:'application/json'});
// var urlencodedParser = bodyParser.urlencoded({ extended:true,limit:1024*1024*20,type:'application/x-www-form-urlencoding' })

// GraphQLClient.use(jsonParser);
// GraphQLClient.use(urlencodedParser);

// GRAPHQL - REACTION SERVER
const endpoint = "http://localhost:4000/graphql";

const getGqlRequestFn = (request, variables) => {
  const headers = {credentials: 'include', mode: "cors"};
  const graphQLClient = new GraphQLClient(endpoint, headers);
  graphQLClient.setHeader("Accept", "application/graphql+json, application/json")
  return async () => await graphQLClient.request(request, variables);
}

export const useGqlQuery = (key, query, variables, options = {}) => {
  const queryFn = getGqlRequestFn(query, variables);
  return useQuery(key, queryFn, options);
};

export const useGqlMutation = (mutation, options = {}) => {
  const headers = {credentials: 'include', mode: "cors"};
  const graphQLClient = new GraphQLClient(endpoint, headers);
  const mutationFn = async variables => await graphQLClient.request(mutation, variables);
  return useMutation(mutationFn, options);
};

export const useGqlSubscription = (subscription, variables, options = {}) => {
  const subscriptionFn = getGqlRequestFn(subscription, variables);
  return useSubscription(subscriptionFn, options);
}



// REST - JSON SERVER
// import { useState } from "react";
// import axios from "axios";

// export const useApi = (apiFunc) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const request = async (...args) => {
//     setLoading(true);
//     try {
//       const result = await apiFunc(...args);
//       setData(result.data);
//     } catch (err) {
//       setError(err.message || "Unexpected Error!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     data,
//     error,
//     loading,
//     request,
//   };
// };

// export const apiClient = axios.create({
//   baseURL: "http://localhost:3001"
// });


