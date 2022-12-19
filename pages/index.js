import CTA from "../components/CTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Goals from "../components/Goals";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Isos from "../components/Isos";
import Layout from "../components/Layout";
import Marquee from "../components/Marquee";
import Projects from "../components/Projects";
import SEOHead from "../components/SEO";
import Services from "../components/Services";
import Spacer from "../components/Spacer";
import Statistics from "../components/Statistics";
import client from "../utils/apollo";
import globalMeta from "../utils/globalmeta";
import { GET_ALL_WPDATA } from "../utils/queries";

export default function Home({ projects, statistics, companyLogos, common }) {
  const structuredLd = JSON.stringify({
    "@context": globalMeta.canonicalUrl + "/",
    description: "Environmental Consultants",
  });
  // console.log(companyLogos);
  return (
    <Layout>
      <SEOHead
        canonicalUrl={globalMeta.siteUrl}
        structuredData={structuredLd}
        title="Geon Hellas | Environmental Consultants"
        description="Environmental Consultants"
      />
      <Hero projects={projects} />
      <Statistics statistics={statistics} />
      <Features />
      <Goals />
      <Services />
      <Projects projects={projects} />
      <Marquee companyLogos={companyLogos} />
      <Isos />
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
      statistics: data.statistics.nodes,
      companyLogos: data.companyLogos.nodes.map(
        (item) => item.featuredImage.node
      ),
    },
    revalidate: 1,
  };
}
