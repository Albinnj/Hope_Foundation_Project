import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  const domain = "dev-rvwk56qee0scoftk.us.auth0.com";
  const clientId = "T0r9qc9Aznt48FmaaG5kse0z82Tf3rbF";
  const redirectUri = "http://localhost:5173/";
  const audience = "Hope-foundation";

  if (!domain || !clientId || !redirectUri || !audience) {
    throw new Error("unable to initialise auth");
  }

  const onRedirectCallback = (appState, user) => {
    navigate(appState?.returnTo || "/auth-callback");
    console.log("User", user);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
