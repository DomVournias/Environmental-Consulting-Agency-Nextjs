import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Marquee from "../components/Marquee";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Statistics from "../components/Statistics";
import { GlobalStyles } from "../styles/GlobalStyles";
import client from "../utils/apollo";
import { GET_PROJECTS } from "../utils/queries";

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_PROJECTS,
  });

  return {
    props: {
      projects: data.projects.nodes,
    },
    revalidate: 1,
  };
}

export default function Home({ projects }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Hero />
        <Marquee />
        <Statistics />
        <Services />
        <Projects projects={projects} />
      </Layout>
    </>
  );
}
