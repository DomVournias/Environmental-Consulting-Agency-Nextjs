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
    executives(first: 20) {
      nodes {
        id
        title
        resume {
          photo {
            sourceUrl
          }
        }
        role {
          position
          year
        }
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

const GET_EXECUTIVES = gql`
  query Executives {
    executives {
      nodes {
        id
        title
        resume {
          photo {
            sourceUrl
          }
        }
        role {
          position
          year
        }
        education {
          degree
          masters
        }
        expertise {
          expertise
        }
      }
    }
  }
`;

const GET_EXECUTIVE_SLUG = gql`
  query Executives {
    executives {
      nodes {
        slug
      }
    }
  }
`;

const GET_EXECUTIVE_DETAILS = (slug) => {
  const getExecutiveDetails = gql`
  query Executive {
    executive(id: "${slug}", idType: SLUG) {
      nodes {
        id
        title
        resume {
          photo {
            sourceUrl
          }
        }
        role {
          position
          year
        }
        education {
          degree
          masters
        }
        expertise {
          expertise
        }
      }
    }
  }
`;

  return getExecutiveDetails;
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
  GET_EXECUTIVE_DETAILS,
  GET_EXECUTIVE_SLUG,
  GET_EXECUTIVES,
};
