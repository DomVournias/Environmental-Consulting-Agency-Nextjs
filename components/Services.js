import styled from "styled-components";
import { services } from "../dummydata";
import { Section } from "../styles/GlobalStyles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    gsap.to("#servicesContainer", {
      duration: 6,
      borderTopLeftRadius: "0%",
      borderTopRightRadius: "0%",
      scrollTrigger: {
        trigger: "#servivesSection",
        start: "-20% bottom",
        end: "20% start",
        scrub: 0.3,
        // markers: true,
      },
    });
  }, []);

  return (
    <Section bg="#1a1a1a" mt="-2rem" id="servicesSection" pos="relative">
      <Container id="servicesContainer">
        <Wrapper>
          <Header>
            <h3 id="titleServices">Τι προσφέρουμε</h3>
            {/* <p>It is a long established fact that a reader will be distracted</p> */}
          </Header>
          <Cards>
            {services.map(({ title, servicesList, icon, button, phone }, i) => (
              <Service key={i}>
                {icon ? <span>{icon}</span> : null}
                <ServiceTitle>{title}</ServiceTitle>
                <ServiceList>
                  {servicesList.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ServiceList>
                <div>
                  {button} {button && <span>or</span>} {phone}
                </div>
              </Service>
            ))}
          </Cards>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Services;

const ServiceTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.p.lg};
  margin-bottom: 1rem;
  z-index: 2;
`;

const ServiceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.font.p.sm};
  list-style: disc;
  list-style-type: disc;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 22px;

  > li {
    display: list-item;
  }
`;

const Container = styled.div`
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  background-color: ${({ theme }) => theme.white};
  z-index: 999;
  overflow: visible;
  display: block;
  position: relative;
`;

const Wrapper = styled.div`
  width: 95rem;
  margin: 0 auto;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 11em;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;

  h3 {
    font-size: ${({ theme }) => theme.font.h.md};
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(
      clamp(
        clamp(
          clamp(
            100%/ (var(--c4) + 1) + 0.1%,
            (var(--xl) - 100%) * 1000,
            100%/ (var(--c2) + 1) + 0.1%
          ),
          (var(--l) - 100%) * 1000,
          100%/ (var(--c2) + 1) + 0.1%
        ),
        (var(--t) - 100%) * 1000,
        100%
      ),
      1fr
    )
  );

  gap: 2.5em;
  overflow: hidden;
`;

const Service = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 2em;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.white};
  background-color: rgba(0, 0, 0, 0.1);

  &:nth-child(4) {
    justify-content: space-between;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.blueTint.dark.b};

    ul {
      list-style: none;
      list-style-type: none;
      margin-block-start: 0em;
      margin-block-end: 0em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 0px;

      li {
        font-size: ${({ theme }) => theme.font.p.sm};
        display: block;
        margin-top: -1.5rem;
      }
    }

    div {
      a,
      span {
        display: inline-block;
        margin-right: 10px;
      }

      span {
        opacity: 0.7;
      }

      & :nth-child(1) {
        color: #000;
        background-color: #fff;
        border-radius: 8px;
        padding: 0.5em 1em;
        font-size: 1.02rem;
      }

      & :nth-child(3) {
        font-size: 1.02rem;
        text-decoration: underline;
        text-underline-position: under;
      }
    }
  }

  > span {
    font-size: 1.8rem;
  }

  p {
    opacity: 0.85;
  }
`;
