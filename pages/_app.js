import '../styles/globals.css'
import {store} from "../store/store";
import {Provider} from "react-redux";
import { AuthProvider } from "react-oidc-context";


const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
const clientRoot = `${origin}/`;
const defaultEcosystem = process.env.NEXT_PUBLIC_TRINSIC_ECOSYSTEM;
const defaultSchema = process.env.NEXT_PUBLIC_CREDENTIAL_SCHEMA;
const authConfig = {
  authority: "https://connect.trinsic.cloud",
  client_id:process.env.NEXT_PUBLIC_TRINSIC_CLIENT_ID,
  redirect_uri: `${clientRoot}oidc/verify`,
  silent_redirect_uri: `${clientRoot}silent-renew`,
  post_logout_redirect_uri: `${clientRoot}`,
  response_type: "code",
  scope: "openid",
  extraQueryParams: {
    "trinsic:ecosystem": defaultEcosystem,
    "trinsic:schema": defaultSchema,
  }
}
export default function App({ Component, pageProps }) {
  return  <AuthProvider {...authConfig}>
  <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
  </AuthProvider>
}
