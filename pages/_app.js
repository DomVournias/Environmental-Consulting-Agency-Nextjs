import { getCookie } from "cookies-next";

import { TagManagerScript, UpdateTagManager } from "../utils/tagManager";
// import useCommonProps from "next-common-props/useCommonProps";

function MyApp({ Component, pageProps }) {
  const consent = getCookie("localConsent");


  return (
    <>
      <TagManagerScript />
      {consent === true && <UpdateTagManager />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
