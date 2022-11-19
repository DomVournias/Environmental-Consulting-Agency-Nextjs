import Features from "../components/Features";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Marquee from "../components/Marquee";
import Projects from "../components/Projects";
import SEOHead from "../components/SEO";
import Services from "../components/Services";
import Statistics from "../components/Statistics";
import client from "../utils/apollo";
import globalMeta from "../utils/globalmeta";
import { GET_ALL_WPDATA } from "../utils/queries";

export default function Home({ projects, headerMenu }) {
  const structuredLd = JSON.stringify({
    "@context": globalMeta.canonicalUrl + "/",
    description: "Environmental Consultants",
  });
  return (
    <Layout>
      <SEOHead
        canonicalUrl={globalMeta.siteUrl}
        structuredData={structuredLd}
        title="Geon Hellas | Environmental Consultants"
        description="Environmental Consultants"
      />
      <Header headerMenu={headerMenu} />
      <main>
        <article>
          <Hero />
          <Marquee />
          <Statistics />
          <Features />
          <Services />
          <Projects projects={projects} />
        </article>
      </main>
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
