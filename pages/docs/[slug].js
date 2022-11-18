import React from "react";
import Layout from "../../components/Layout";
import client from "../../utils/apollo";
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

const DocumentPage = ({ doc }) => {
  console.log(doc);
  return <Layout>DocumentPage</Layout>;
};

export default DocumentPage;
