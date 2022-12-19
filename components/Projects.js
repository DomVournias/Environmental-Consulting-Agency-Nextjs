import Image from "next/legacy/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Section } from "../styles/GlobalStyles";
import {
  Arrow,
  Blob,
  Container,
  Content,
  Heading,
  Images,
  Links,
  ListItem,
  Project,
  Title,
  Wrapper,
} from "../styles/Projects.styled";
import {
  activeBackgroundLink,
  activeColorLink,
  activeOpacity,
  activeTranslateArrow,
} from "../styles/Theme";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Projects = ({ projects }) => {
  const [imageIndex, setImageIndex] = useState(0);

  // const uniqueProjectNames = [];

  // const filteredProjects = projects.filter((project) => {
  //   const isDuplicate = uniqueProjectNames.includes(
  //     project.features.shortTitle
  //   );

  //   if (isDuplicate) {
  //     uniqueProjectNames.push(project.features.shortTitle);

  //     return true;
  //   }
  //   return false;
  // });

  // console.log(projects);
  // console.log(filteredProjects);
  return (
    <Section m="10rem auto 6rem auto" p="0 1rem 0 1rem" bg="#fff">
      <Container>
        <Wrapper>
          <Heading id="heading">
            <Title>Τελευταία έργα</Title>
            <Link href="/projects">
              <span>Όλα τα έργα</span>
              <Arrow />
            </Link>
          </Heading>
          <Content>
            <Links>
              {projects.slice(5).map(({ features, slug }, i) => (
                <Project
                  key={i}
                  onMouseOver={() => setImageIndex(i)}
                  col={activeColorLink(i, imageIndex)}
                  bg={activeBackgroundLink(i, imageIndex)}
                >
                  <Link href={`/projects/${slug}`}>
                    <span>{features.shortTitle}</span>
                    <Arrow
                      opacity={activeOpacity(i, imageIndex)}
                      translate={activeTranslateArrow(i, imageIndex)}
                    />
                  </Link>
                </Project>
              ))}
            </Links>

            <Images>
              <div />
              {projects.map((project, i) => {
                const image = project.featuredImage.node.sourceUrl;
                return (
                  <ListItem key={i} opacity={activeOpacity(i, imageIndex)}>
                    <div>
                      <Image
                        src={image}
                        layout="fill"
                        objectFit="cover"
                        alt={`image-${i}`}
                      />
                    </div>
                  </ListItem>
                );
              })}
            </Images>
          </Content>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Projects;
