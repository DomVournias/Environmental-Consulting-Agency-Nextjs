import Features from "../components/Features";
import Goals from "../components/Goals";
import Hero from "../components/Hero";
import Isos from "../components/Isos";
import Layout from "../components/Layout";
import Marquee from "../components/Marquee";
import Projects from "../components/Projects";
import SEOHead from "../components/SEO";
import Services from "../components/Services";
import Statistics from "../components/Statistics";
import Executives from "../components/Executives";
import ContactForm from "../components/ContactForm";
import client from "../utils/apollo";
import globalMeta from "../utils/globalmeta";
import { GET_ALL_WPDATA } from "../utils/queries";
import "swiper/css";
import Modal from "../components/Modal";
import { useState } from "react";

export default function Home({
  projects,
  statistics,
  companyLogos,
  executives,
  common,
}) {
  const structuredLd = JSON.stringify({
    "@context": globalMeta.canonicalUrl + "/",
    description: "Environmental Consultants",
  });

  const [showModal, setShowModal] = useState(false);

  return (
    <Layout>
      <SEOHead
        canonicalUrl={globalMeta.siteUrl}
        structuredData={structuredLd}
        title="Geon Hellas | Environmental Consultants"
        description="Environmental Consultants"
      />
      <Hero projects={projects} />
      {/* <Statistics statistics={statistics} />
      <Features /> */}
      <Goals onOpen={() => setShowModal(true)} />
      <Services />
      <Executives executives={executives} />
      <Projects projects={projects} />
      <Marquee companyLogos={companyLogos} />
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ContactForm />
      </Modal>
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
      executives: data.executives.nodes,
    },
    revalidate: 1,
  };
}
