import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query Projects {
    projects {
      nodes {
        id
        title
        slug
        features {
          projectDate
        }
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        content(format: RENDERED)
      }
    }
  }
`;

export { GET_PROJECTS };
