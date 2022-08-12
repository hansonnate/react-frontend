//External
import React, { useState } from "react";
// import Cookies from "universal-cookie";

//Internal
import { useLoginRequest } from "api/resources/authentication";
// import { TextField } from "components/inputs";

/**
 * The login functionality to login the user in
 * @param {Function} setToken sets the current token when called
 * @returns {token} the token that has been set
 */

//  const cookies = new Cookies();

 interface Props {
    setToken: Function;
 }

export const Login: React.FC<Props> = ({ setToken }) => {
  const loginUserRequest = useLoginRequest();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = () => {
    loginUserRequest.mutate(
      {
        email: email,
        password: password,
      },
      {
        onSuccess: (data: any) => {
          console.log(data);
          console.log(document.cookie);
          setToken(data);
          window.location.reload();
        },
      }
    );
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem("reaction_token");
    if (tokenString != undefined) {
      return JSON.parse(tokenString);
    }
    return null;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: string) => {
    console.log(userToken);
    localStorage.setItem("reaction_token", JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
};
