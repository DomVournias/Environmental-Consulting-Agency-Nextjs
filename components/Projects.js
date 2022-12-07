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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const blobAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#heading",
        // markers: true,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
      defaults: {
        duration: 3,
      },
    });
    blobAnimation
      .fromTo("#blob", { y: -150, opacity: 0 }, { y: 0, opacity: 1 })

      .fromTo(
        "#heading_two",
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, delay: 1 }
      );
  }, []);

  return (
    <Section mx="90rem" m="15rem auto 6rem auto" p="0 1rem 0 1rem">
      <Container>
        <Wrapper>
          <Heading id="heading">
            {/* <Blob id="blob"></Blob> */}
            <Title>Τελευταίες δουλειές</Title>
            <Link href="/projects">
              <span>Όλλα τα έργα</span>
              <Arrow />
            </Link>
            {/* <Blob id="blob">
              <Image
                src="/blobTitle1.png"
                width={200}
                height={200}
                objectFit="cover"
              />
            </Blob> */}
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
