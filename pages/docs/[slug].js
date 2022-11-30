import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import SEOHead from "../../components/SEO";

import client from "../../utils/apollo";
import globalMeta from "../../utils/globalmeta";

import { GET_DOC_DETAILS, GET_DOC_SLUG } from "../../utils/queries";

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_DOC_SLUG,
  });

  console.log(data);

  const paths = data.docs.nodes.map((doc) => ({
    params: {
      slug: doc.slug,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const { data } = await client.query({
    query: GET_DOC_DETAILS(slug),
  });

  return {
    props: {
      doc: data.doc,
    },
    revalidate: 1,
  };
};

const structuredLd = JSON.stringify({
  "@context": globalMeta.canonicalUrl + "/",
  description: "Environmental Consultants",
});

const DocumentPage = ({ doc }) => {
  // console.log(doc);
  return (
    <Layout>
      <SEOHead
        canonicalUrl={globalMeta.siteUrl}
        structuredData={structuredLd}
        title="Geon Hellas | Environmental Consultants"
        description="Environmental Consultants"
      />

      <Container>
        <Inner>
          <Title>{doc.title}</Title>

          <Content dangerouslySetInnerHTML={{ __html: doc?.content }} />
        </Inner>
      </Container>
    </Layout>
  );
};

export default DocumentPage;

const Container = styled.div`
  margin-top: -9rem;
  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
  padding-top: 12rem;
  width: 100%;
`;

const Inner = styled.div`
  padding: 4rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 100px;
  margin-bottom: 3rem;
  max-width: 67.25rem;
  align-self: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  background-image: linear-gradient(
    ${({ theme }) => theme.blue},
    ${({ theme }) => theme.green}
  );
  background-position: bottom left;
  background-size: 100% 0.8rem;
  background-repeat: no-repeat;
  padding-bottom: 15px;
  border-bottom-right-radius: 20px;
  width: fit-content;
  margin-bottom: 2rem;
`;

const Content = styled.p`
  line-height: 1.5rem;
`;
