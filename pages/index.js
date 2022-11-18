import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Marquee from "../components/Marquee";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Statistics from "../components/Statistics";
import client from "../utils/apollo";
import { GET_ALL_WPDATA } from "../utils/queries";

export default function Home({ projects, headerMenu }) {
  return (
    <Layout headerMenu={headerMenu}>
      <Hero />
      <Marquee />
      <Statistics />
      <Features />
      <Services />
      <Projects projects={projects} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_ALL_WPDATA,
  });

  return {
    props: {
      projects: data.projects.nodes,
      headerMenu: data.menu.menuItems.edges.map((item) => item.node),
    },
    revalidate: 1,
  };
}
