import Image from "next/legacy/image";
import Link from "next/link";
import React, { useState } from "react";
import { Section } from "../styles/GlobalStyles";
import {
  Arrow,
  Container,
  Content,
  Heading,
  Images,
  Links,
  ListItem,
  Project,
  Wrapper,
} from "../styles/Projects.styled";
import {
  activeBackgroundLink,
  activeColorLink,
  activeOpacity,
  activeTranslateArrow,
} from "../styles/Theme";

const Projects = ({ projects }) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <Section mx="90rem" m="15rem auto 6rem auto" p="0 1rem 0 1rem">
      <Container>
        <Wrapper>
          <Heading>
            <h3>Τελευταίες δουλειές</h3>
            <Link href="/projects">
              <span>Όλλα τα έργα</span>
              <Arrow />
            </Link>
          </Heading>
          <Content>
            <Links>
              {projects.map(({ title, slug }, i) => (
                <Project
                  key={i}
                  onMouseOver={() => setImageIndex(i)}
                  col={activeColorLink(i, imageIndex)}
                  bg={activeBackgroundLink(i, imageIndex)}
                >
                  <Link href={`/projects/${slug}`}>
                    <span>{title}</span>
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
