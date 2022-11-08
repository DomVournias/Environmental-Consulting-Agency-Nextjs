import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Services from "../components/Services";
import Counter from "../components/Statistics";
import { GlobalStyles } from "../styles/GlobalStyles";

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Hero />
        <Services />
        <Counter />
      </Layout>
    </>
  );
}
