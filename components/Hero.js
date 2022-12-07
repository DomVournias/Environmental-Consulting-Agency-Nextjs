import gsap from "gsap";
import Image from "next/legacy/image";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Section } from "../styles/GlobalStyles";

const Hero = ({ projects }) => {
  // const [titleIndex, setTitleIndex] = useState(0);
  useEffect(() => {
    gsap.to("#description", {
      y: 0,
      opacity: 0.8,
      visibility: "visible",
      duration: 1,
    });
    gsap
      .timeline({ repeat: -1 })
      .to("#heading1", {
        opacity: 1,
        duration: 2,
      })
      .to("#heading1", {
        opacity: 0,
        duration: 1,
      })
      .to("#heading2", {
        opacity: 1,
        duration: 2,
      })
      .to("#heading2", {
        opacity: 0,
        duration: 1,
      })
      .to("#heading3", {
        opacity: 1,
        duration: 2,
      })
      .to("#heading3", {
        opacity: 0,
        duration: 1,
      });
  }, []);

  const titles = [
    {
      id: "heading1",
      text: "Αξιοπιστία",
    },
    {
      id: "heading2",
      text: "Τεχνογνωσία",
    },
    {
      id: "heading3",
      text: "Συνέπεια",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      // setTitleIndex();
    }, 2000);
  }, []);

  const projectImages = projects.map(
    (image) => image.featuredImage.node.sourceUrl
  );

  // console.log(theme);

  return (
    <Section mx="" mt="-9rem" p="" overflow="hidden">
      <Inner>
        {/* <span id="ballone">
          <span>
            <Image
              src="/backHero1.png"
              width="700"
              height="700"
              alt="cirlceOne"
            />
          </span>
        </span>
        <span id="balltwo">
          <span>
            <Image
              src="/backHero2.png"
              width="500"
              height="500"
              alt="cirlceTwo"
            />
          </span>
        </span> */}
        <Overlay />
        <Image
          src="/heroBackImage.png"
          alt="hero background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          id="HeroBackgroundImage"
        />
        <Wrapper>
          <Content>
            <Title>
              {titles.map(({ id, text }, i) => (
                <Text key={i} id={id}>
                  {text}
                </Text>
              ))}
            </Title>
            <Description id="description">
              Για περισσότερα από 20 χρόνια παρέχουμε υπηρεσίες σε ένα ευρύ
              φάσμα περιβαλλοντικών και τεχνικής υποστήριξης, διαθέτοντας μια
              σταθερή βάση γνώσεων και μια ομάδα υψηλής εξειδίκευσης και
              εμπειρίας.
            </Description>
            {/* <ImageContainer id="image">
              <Image
                src="/heroGridImage5.png"
                objectFit="contain"
                alt="hero-image"
                layout="fill"
              />
            </ImageContainer> */}
          </Content>

          {/* <HeroMenu id="menu">
            <ul>
              {links.map(({ label, path }, i) => (
                <li key={i} className="button-86">
                  <Link href={`${path}`}>{label}</Link>
                </li>
              ))}
            </ul>
            <CallButton />
            
          </HeroMenu> */}
          {/* <Marquee /> */}
        </Wrapper>
      </Inner>
    </Section>
  );
};

export default Hero;

const Text = styled.span`
  opacity: 0;
  /* visibility: hidden; */
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.h.lg};
  font-weight: 500;
  display: block;
  position: absolute;
`;

const Description = styled.p`
  margin-top: 2em;
  transform: translateY(3rem);
  opacity: 0;
  line-height: 2.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.p.md};
`;

const Content = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  height: 5rem;
  position: relative;
`;

const Inner = styled.div`
  padding-top: 19rem;
  padding-bottom: 3rem;
  height: 100vh;
  position: relative;

  &#HeroBackgroundImage {
    z-index: 10;
  }
`;

const Overlay = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(255, 255, 255, 0.6); */
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 20;
`;

const Wrapper = styled.div`
  max-width: 71.25rem;
  padding: 0 1.5rem;
  margin: 0 auto;

  & * {
    z-index: 30;
  }
`;

const HeroMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  background-color: ${({ theme }) => theme.blueTint.light.e};
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 4px 12px;
  z-index: 30;

  ul {
    font-size: ${({ theme }) => theme.font.p.sm};
    font-weight: 500;
    display: flex;
    gap: 1rem;
    margin: 0;

    li {
      color: ${({ theme }) => theme.blueTint.light.a};
      background-color: ${({ theme }) => theme.blueTint.light.g};
      border-radius: 20px;

      a {
        position: relative;
        padding: 1rem 1.4rem;
        display: block;
        opacity: 0.9;
      }
    }
  }
`;
