import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Section } from "../styles/GlobalStyles";
import { motion, useAnimation, useInView } from "framer-motion";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SiCheckmarx } from "react-icons/si";

const Statistics = ({ statistics }) => {
  const [counterOn, setCounterOn] = useState(false);
  const numbersRef = useRef(null);
  const numbersInView = useInView(numbersRef);
  const animation = useAnimation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const headings = gsap.timeline({
      scrollTrigger: {
        trigger: "#statistics-content",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
      defaults: {
        duration: 3,
      },
    });

    headings
      .fromTo("#heading_one", { x: 30, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo(
        "#heading_two",
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, delay: 1 }
      );
  }, []);

  useEffect(() => {
    if (numbersInView) {
      setCounterOn(true);
    }
    if (!numbersInView) {
      setCounterOn(false);
    }
  }, [numbersInView]);

  return (
    <Section>
      <Wrapper>
        <VideoPlayer>
          <Overlay />
          <Video autoPlay loop muted>
            <source type="video/mp4" src="/BackgroundVideo.mp4" />
          </Video>
        </VideoPlayer>

        <Content id="statistics-content">
          <Heading>
            <span id="heading_one">Waste it or preserve it.</span>
            <span id="heading_two">The choice is yours.</span>
          </Heading>
          <Stats ref={numbersRef}>
            {statistics.map(({ data, title }, i) => (
              <Stat key={i}>
                <span>
                  {numbersInView ? (
                    <CountUp
                      start={0}
                      end={data.number}
                      duration={2}
                      delay={0}
                    />
                  ) : (
                    0
                  )}
                </span>

                <p>
                  <SiCheckmarx />
                  <label>{title}</label>
                </p>
              </Stat>
            ))}
          </Stats>
        </Content>
      </Wrapper>
    </Section>
  );
};

export default Statistics;

const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 6rem;
  padding-left: 4em;
  position: relative;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    padding-left: 2.5em;
    gap: 3rem;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    position: absolute;
    width: 100%;
    padding: 2rem;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin: 8rem auto 8rem auto;
  position: relative;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    margin: 4rem auto 4rem auto;
  }
`;

const VideoPlayer = styled.div`
  width: calc(0vw + 47%);
  height: 80vh;
  position: relative;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 50%;
    height: 120vh;
    opacity: 0.4;
  }
`;
const Overlay = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const Video = styled.video`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scaleX(-1);
  z-index: 1;
`;

const Heading = styled(motion.h2)`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.font.h.md};
  font-weight: 500;
  width: 100%;
  z-index: 3;
`;

const Stats = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 4rem;
  }
`;

const Stat = styled.li`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    justify-content: center;
  }

  span {
    font-size: ${({ theme }) => theme.font.h.md};
    margin-bottom: 1rem;
    width: 100%;

    > font {
      font-size: 3rem;
      font-weight: 500;
    }
  }

  p {
    display: flex;
    align-items: center;

    @media ${({ theme }) => theme.breakpoints.tablet} {
      align-self: center;
    }

    svg {
      margin-right: 0.7rem;
      font-size: ${({ theme }) => theme.font.h.statIcon};
      color: ${({ theme }) => theme.green};

      @media ${({ theme }) => theme.breakpoints.tablet} {
        color: ${({ theme }) => theme.blue};
      }
    }

    label {
      font-size: ${({ theme }) => theme.font.h.statLabels};

      letter-spacing: 0.5rem;
      color: ${({ theme }) => theme.blueTint.dark.f};
    }
  }
`;
