import "./App.css";
import { useAuth } from "react-oidc-context";
import Home from "./components/Home";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { config } from "./config/env";

// const { client_id, localURL: logoutUri, cognitoDomain } = config;

function App() {
  const auth = useAuth();
  const navigate = useNavigate();

  console.log(auth);

  // const signOutRedirect = () => {
  //   sessionStorage.clear();

  //   window.location.href = `${cognitoDomain}/logout?client_id=${client_id}&logout_uri=${encodeURIComponent(
  //     logoutUri
  //   )}`;
  // };

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/");
    }
  }, [auth.isAuthenticated, navigate]);

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    const accessToken = auth.user?.access_token;

    return (
      <div>
        <button className="signOut" onClick={() => auth.removeUser()}>
          Sign out
        </button>
        <Home accessToken={accessToken} />
      </div>
    );
  }

  return (
    <div className="app">
      <div className="logo">
        <img src="logo.png" alt="logo" />
      </div>
      <h1>Car Price Estimator</h1>
      <h3>Please Login to use</h3>
      <button onClick={() => auth.signinRedirect()}>Sign in / Register</button>
      {/* <button onClick={() => signOutRedirect()}>Sign out</button> */}
    </div>
  );
}

export default App;
