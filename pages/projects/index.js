import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { Section } from "../../styles/GlobalStyles";
import client from "../../utils/apollo";
import { GET_ALL_WPDATA } from "../../utils/queries";
import { BsArrowRight } from "react-icons/bs";

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_ALL_WPDATA,
  });

  return {
    props: {
      projects: data.projects.nodes,
    },
    revalidate: 1,
  };
}

const ProjectsArchive = ({ projects }) => {
  console.log(projects);
  return (
    <Layout>
      <Section m="-9rem auto 0 auto">
        <FeaturedImage>
          <Image
            src="/projectsBackground.jpg"
            layout="fill"
            objectFit="cover"
            alt="projects-background"
          />
          <Title>
            <h3>
              Τα τελευταία<br></br> έργα μας
            </h3>
          </Title>
        </FeaturedImage>
        <Content>
          <Projects>
            {projects.map((project, i) => (
              <Project key={i} id={project.id}>
                <Link href={`/projects/${project.slug}`}>
                  <Container>
                    <Image
                      src={project.featuredImage.node.sourceUrl}
                      alt={`project-${project.title}`}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      id={project.id}
                    />

                    <Info>
                      <Client>{project.title}</Client>
                      <Description>
                        {project.features.shortDescription}
                      </Description>
                      <Tags>
                        {project.tags.nodes.map((tag, i) => (
                          <Tag key={i} id={`${tag.name}- ${i}`}>
                            {tag.name}
                            {i === project.tags.nodes.length - 1 ? "" : ","}
                          </Tag>
                        ))}
                      </Tags>
                    </Info>
                    <Arrow />
                  </Container>
                </Link>
              </Project>
            ))}
          </Projects>
        </Content>
      </Section>
    </Layout>
  );
};

export default ProjectsArchive;

const Description = styled.p`
  width: 60%;
  font-size: ${({ theme }) => theme.font.p.xl};
  line-height: 4.3rem;
  font-weight: 500;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.h.sm};
  margin-bottom: 5rem;
  font-weight: 500;
  z-index: 20;
  color: #fff;
  width: 100%;
  display: flex;
  width: 71.25rem;
  margin: 0 auto;
  padding: 2rem;
  align-items: center;
`;

const FeaturedImage = styled.div`
  height: 40rem;
  width: auto;
  display: flex;
  position: relative;
  overflow: hidden;

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
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 0) 100%
    );
    opacity: 0.8;
    z-index: 10;
  }
`;

export const Arrow = styled(BsArrowRight)`
  position: absolute;
  bottom: 3rem;
  right: 6rem;
  color: #fff;
  font-size: 3.7rem;
  stroke-width: 0.4;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translate(-1.5rem);
  z-index: 30;
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 6rem 0rem 4rem 8rem;
  justify-content: space-between;
  color: ${({ theme }) => theme.white};
  z-index: 20;
`;

const Client = styled.h3`
  font-size: ${({ theme }) => theme.font.p.lg};
`;
const Tags = styled.ul``;
const Tag = styled.li`
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.p.sl};
  margin-right: 0.5rem;
`;

const Content = styled.div`
  padding: 1rem;
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  width: 71.25rem;
`;

const Projects = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
const Project = styled.li`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 0 15px 34px 0 rgb(0 0 0 / 25%);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover {
    transform: scale(0.95);

    ${Arrow} {
      opacity: 1;
      transform: translate(0rem);
    }
  }

  a {
    :hover {
      all: unset;
    }
  }
`;

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 71.25rem;
  height: 40rem;

  &::before {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    content: " ";
    display: block;
    z-index: 20;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.25);
    z-index: 10;
  }
`;
