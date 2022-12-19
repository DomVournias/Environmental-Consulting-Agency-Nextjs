import Image from "next/legacy/image";
import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import SEOHead from "../../components/SEO";
import { projects } from "../../dummydata";
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

const ProjectInfo = ({ project }) => {
  console.log(project);
  const image = project.featuredImage.node.sourceUrl;
  return (
    <Layout>
      <SEOHead
        canonicalUrl={globalMeta.siteUrl}
        structuredData={structuredLd}
        title="Geon Hellas | Environmental Consultants"
        description="Environmental Consultants"
      />
      <Section m="-9rem auto 0 auto">
        <FeaturedImage>
          <h2>{project.title}</h2>
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt={`image-${project.slug}`}
          />
        </FeaturedImage>
        <Inner>
          <Info>
            <Row>
              <Block>
                <span>Πελάτης</span>
                <p>{project.title}</p>
              </Block>
              <Block>
                <span>Ημερομηνία</span>
                <p id="project-date-start">{project.features.projectDate} </p>
                <p id="project-date-indicator">έως</p>
                <p id="project-date-end">{project.features.projectDateEnd}</p>
              </Block>
            </Row>

            <Block>
              <span>Υπηρεσίες</span>
              {project.tags.nodes.map((service, i) => (
                <p key={i}># {service.name}</p>
              ))}
            </Block>
          </Info>
          <Content dangerouslySetInnerHTML={{ __html: project.content }} />
        </Inner>
      </Section>
    </Layout>
  );
};

export default ProjectInfo;

const Inner = styled.div`
  margin: 0 auto;
  max-width: 67.25rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  background-color: #fff;

  font-size: 1.2rem;

  p {
    font-weight: 500;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 2rem;
`;

const Block = styled.div`
  span {
    opacity: 0.8;
  }

  p {
    margin-left: 1rem;
  }

  & #project-date-indicator {
    margin-left: 0.5rem;
    font-size: 1rem;
    opacity: 0.86;
  }
`;

const Content = styled.div`
  padding: 0rem 1.5rem 1.5rem 1.5rem;
  background-color: #fff;
  line-height: 2.5rem;
  font-size: 1.4rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-top: 3rem;
  margin-bottom: 6rem;

  &::first-letter {
    initial-letter: 4;
    font-size: 2.2rem;
    color: ${({ theme }) => theme.blue};
    font-weight: bold;
  }
`;

const FeaturedImage = styled.div`
  height: 40rem;
  width: auto;
  display: flex;
  position: relative;
  overflow: hidden;

  h2 {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: block;
    height: fit-content;
    width: fit-content;
    color: ${({ theme }) => theme.blueTint.light.b};
    font-size: ${({ theme }) => theme.font.h.xs};
    z-index: 100;
  }

  &::after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    opacity: 0.8;
  }
`;
