import Image from "next/legacy/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import SEOHead from "../../components/SEO";
import { Section } from "../../styles/GlobalStyles";
import client from "../../utils/apollo";
import globalMeta from "../../utils/globalmeta";
import { GET_PROJECT_DETAILS, GET_PROJECT_SLUG } from "../../utils/queries";

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_PROJECT_SLUG,
  });

  const paths = data.projects.nodes.map((project) => ({
    params: {
      slug: project.slug,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const { data } = await client.query({
    query: GET_PROJECT_DETAILS(slug),
  });

  return {
    props: {
      project: data.project,
      headerMenu: data.menu.menuItems.edges.map((item) => item.node),
    },
    revalidate: 1,
  };
};

const structuredLd = JSON.stringify({
  "@context": globalMeta.canonicalUrl + "/",
  description: "Environmental Consultants",
});

const ProjectInfo = ({ project, headerMenu }) => {
  const router = useRouter();

  console.log(router);

  const image = project.featuredImage.node.sourceUrl;
  return (
    <Layout>
      <SEOHead
        canonicalUrl={globalMeta.siteUrl}
        structuredData={structuredLd}
        title="Geon Hellas | Environmental Consultants"
        description="Environmental Consultants"
      />

      <Section mx="67.25rem" m="0 auto">
        <FeaturedImage>
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt={`image-${project.slug}`}
          />
        </FeaturedImage>
        <Info>
          <Block>
            <span>Ημερομηνία</span>
            <p>{project.features.projectDate}</p>
          </Block>
          <td> </td>
          <Block>
            <span>Πελάτης</span>
            <p>{project.title}</p>
          </Block>
          <td> </td>
          <Block>
            <span>Υπηρεσίες</span>
            {project.tags.nodes.map((service, i) => (
              <p key={i}># {service.name}</p>
            ))}
          </Block>
        </Info>
        {project ? (
          <Content dangerouslySetInnerHTML={{ __html: project?.content }} />
        ) : (
          "Loading..."
        )}
      </Section>
    </Layout>
  );
};

export default ProjectInfo;

const Info = styled.div`
  display: flex;

  gap: 2rem;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  background-color: #fff;

  td {
    border: 1px solid #000;
    opacity: 0.85;
  }
`;

const Block = styled.div`
  span {
    opacity: 0.8;
  }
  p {
    margin-left: 1rem;
  }
`;

const Content = styled.div`
  padding: 0rem 1.5rem 1.5rem 1.5rem;
  background-color: #fff;
  line-height: 1.5rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-bottom: 3rem;
`;

const FeaturedImage = styled.div`
  height: 40rem;
  width: auto;
  display: flex;
  position: relative;
  margin-top: 4rem;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
  background-color: #fff;
`;
