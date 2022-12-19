import { gql } from "@apollo/client";

const GET_ALL_WPDATA = gql`
  query GetAllWpData {
    menu(id: "Front Menu", idType: NAME) {
      id
      name
      slug
      menuItems {
        edges {
          node {
            label
            path
          }
        }
      }
    }
    projects {
      nodes {
        id
        title
        slug
        features {
          projectDate
          shortDescription
          shortTitle
          projectDateEnd
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
    statistics {
      nodes {
        data {
          number
        }
        title
      }
    }
    companyLogos {
      nodes {
        featuredImage {
          node {
            title
            sourceUrl
          }
        }
      }
    }
  }
`;

const GET_HEADER_MENU = gql`
  query Header_Menu {
    menu(id: "Front Menu", idType: NAME) {
      id
      name
      slug
      menuItems {
        edges {
          node {
            label
            path
          }
        }
      }
    }
  }
`;

const GET_PROJECTS = gql`
  query Projects {
    projects {
      nodes {
        id
        title
        slug
        features {
          projectDate
          shortTitle
          projectDateEnd
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

const GET_PROJECT_SLUG = gql`
  query Products {
    projects {
      nodes {
        slug
      }
    }
  }
`;

const GET_PROJECT_DETAILS = (slug) => {
  const getProjectDetails = gql`
  query Project {
    project(id: "${slug}", idType: SLUG) {
      slug
      title
      id
      date
      features {
        projectDate
        shortTitle
        projectDateEnd
        
      }
      tags {
        nodes {
          name
          id
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      content(format: RENDERED)
      excerpt(format: RENDERED)
    }
    menu(id: "Front Menu", idType: NAME) {
      id
      name
      slug
      menuItems {
        edges {
          node {
            label
            path
          }
        }
      }
    }
  }
`;

  return getProjectDetails;
};

const GET_DOC_SLUG = gql`
  query Docs {
    docs {
      nodes {
        slug
      }
    }
  }
`;

const GET_DOC_DETAILS = (slug) => {
  const getProjectDetails = gql`
  query Doc {
    doc(id: "${slug}", idType: SLUG) {
      id
      title(format: RENDERED)
      content(format: RENDERED)
    }
  }
`;

  return getProjectDetails;
};

export {
  GET_ALL_WPDATA,
  GET_PROJECTS,
  GET_PROJECT_SLUG,
  GET_PROJECT_DETAILS,
  GET_HEADER_MENU,
  GET_DOC_SLUG,
  GET_DOC_DETAILS,
};
