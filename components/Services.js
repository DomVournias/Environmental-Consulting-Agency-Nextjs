import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { goals, services } from "../dummydata";
import gsap from "gsap";
import { Section } from "../styles/GlobalStyles";
import GoalsImages from "./ServicesImages";
import ServicesList from "./ServicesList";
import ServicesImages from "./ServicesImages";

const Services = () => {
  const [activeImageIndex, setImageIndex] = useState(0);
  const ServicesContainerRef = useRef(null);
  const ServicesImagesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ServicesImagesRef.current,
          start: "top top",
          end: () => `+=${ServicesContainerRef.current.offsetHeight}`,
          scrub: true,
          pin: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Section>
      <Wrapper>
        <LeftContainer>
          <Inner>
            <ServicesUL ref={ServicesContainerRef}>
              <ServicesList
                key={0}
                servicesList={services[0].servicesList}
                title={services[0].title}
                index={0}
                updateActiveImage={setImageIndex}
              />
              <ServicesList
                key={1}
                servicesList={services[1].servicesList}
                title={services[1].title}
                index={1}
                updateActiveImage={setImageIndex}
              />
            </ServicesUL>
            <ServicesList
              key={2}
              servicesList={services[2].servicesList}
              title={services[2].title}
              index={2}
              updateActiveImage={setImageIndex}
            />
          </Inner>
        </LeftContainer>
        <RightContainer
          ref={ServicesImagesRef}
          bg={({ theme }) => theme.blueTint.dark.b}
        >
          <ServicesImagesList>
            {services.map(({ image, id }, index) => (
              <ServicesImages
                key={index}
                image={image}
                id={id}
                index={index}
                activeImageIndex={activeImageIndex}
              />
            ))}
          </ServicesImagesList>
        </RightContainer>
      </Wrapper>
    </Section>
  );
};

export default Services;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const LeftContainer = styled(Container)`
  justify-content: center;
`;

const RightContainer = styled(Container)`
  align-items: center;
  align-self: start;
  background-color: ${(props) => props.bg};
  height: 100vh;
`;

const Inner = styled.div`
  width: 50%;
  height: fit-content;
  margin: 0 auto;
`;

const ServicesUL = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
`;

const ServicesImagesList = styled.ul`
  position: relative;
  width: 30rem;
  height: 30rem;
  margin: auto;
  padding: 0;
  box-sizing: border-box;
`;
