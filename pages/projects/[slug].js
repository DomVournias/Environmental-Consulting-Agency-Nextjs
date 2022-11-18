import Image from "next/legacy/image";
import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { Section } from "../../styles/GlobalStyles";
import client from "../../utils/apollo";
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
    },
    revalidate: 1,
  };
};

const ProjectInfo = ({ project }) => {
  console.log(project);
  const image = project.featuredImage.node.sourceUrl;
  return (
    <Layout>
      <Section mx="71.25rem" m="0 auto">
        <FeaturedImage>
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt={`image-${project.slug}`}
          />
        </FeaturedImage>
      </Section>
      <Section mx="71.25rem" m="0 auto">
        <Info></Info>
        <Content
          dangerouslySetInnerHTML={{ __html: project.content }}
        ></Content>
      </Section>
    </Layout>
  );
};

export default ProjectInfo;

const Info = styled.div`
  margin: 4rem 1.5rem;
`;
const Content = styled.div`
  margin: 4rem 1.5rem;
`;

const FeaturedImage = styled.div`
  height: 40rem;
  width: auto;
  display: flex;
  position: relative;
  margin: 4rem 1.5rem;
  border-radius: 20px;
  overflow: hidden;
`;
