import { getCookie } from "cookies-next";
import ChangeBackground from "../utils/changeBackground";
import { TagManagerScript, UpdateTagManager } from "../utils/tagManager";
// import useCommonProps from "next-common-props/useCommonProps";

function MyApp({ Component, pageProps }) {
  const consent = getCookie("localConsent");

  // const { common } = useCommonProps();
  // console.log(common);
  ChangeBackground();
  return (
    <>
      <TagManagerScript />
      {consent === true && <UpdateTagManager />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
