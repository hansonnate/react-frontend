// External
import React from "react";
import { MainContentRoutes } from "./routes/MainContentRoutes";
import styles from "./App.module.scss";
// import { MainContentRoutes } from "./routes/MainContentRoutes";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Internal

import { SideMenu } from "./components/sidebars";
import { SplitHorizontal } from "./components/layouts";
import { Login, useToken } from "./pages/login/Login";

const queryClient = new QueryClient();
function App() {
  const { token, setToken } = useToken();

  debugger; //eslint-disable no-debugger
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {!token ? ( //!token
          <Login setToken={setToken} />
        ) : (
          <>
            <div className={`${styles.App}`}>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
                rel="stylesheet"
              />
              <BrowserRouter>
                <SplitHorizontal>
                {/* <div className={styles.page}> */}
                  <SideMenu />
                  <div className={styles.mainContent}>
                    <MainContentRoutes />
                  </div>
                {/* </div> */}
                </SplitHorizontal>
              </BrowserRouter>
            </div>
          </>
        )}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
