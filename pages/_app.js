import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === `/projects/[slug]`) {
      window.document.body.classList.add("gray-background");
    }
    if (router.pathname !== `/projects/[slug]`) {
      window.document.body.classList.remove("gray-background");
    }
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
