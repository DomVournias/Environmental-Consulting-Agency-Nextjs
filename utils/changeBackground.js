import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ChangeBackground() {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === `/projects/[slug]` || `/docs/[slug]`) {
      window.document.body.classList.add("gray-background");
    }
    if (router.pathname !== `/projects/[slug]` || `/docs/[slug]`) {
      window.document.body.classList.remove("gray-background");
    }
  }, [router]);
}
