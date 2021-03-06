import { GlobalStyle } from "../shared/styles";
import firebase, { FirebaseContext } from "../firebase";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <FirebaseContext.Provider value={{ firebase }}>
        {GlobalStyle}
        <Component {...pageProps} />
      </FirebaseContext.Provider>
    </>
  );
}

export default MyApp;
