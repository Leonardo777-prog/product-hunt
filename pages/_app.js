import { GlobalStyle } from "../shared/styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {GlobalStyle}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
