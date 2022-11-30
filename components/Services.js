import React from "react";
import styled, { css } from "styled-components";
import { services } from "../dummydata";
import BackBlob from "../styles/BackBlob";
import DotsBlob from "../styles/DotsBlob";
import { Section } from "../styles/GlobalStyles";

const Services = () => {
  return (
    <Section mx="71.25rem" m="5rem auto 10rem auto" p="0 1rem 0 1rem">
      <Wrapper>
        <Heading>Τι προσφέρουμε</Heading>
        <Content>
          <BackBlob />
          {services.map(
            ({ icon, title, description, show }, i) =>
              show && (
                <Service key={i}>
                  <Inner>
                    <DotsBlob />
                    <span>{icon}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </Inner>
                </Service>
              )
          )}
        </Content>
      </Wrapper>
    </Section>
  );
};

export default Services;

const Heading = styled.div`
  margin: 0 auto;
  font-size: ${({ theme }) => theme.font.h.md};
  font-weight: 500;
  z-index: 3;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  gap: 3rem;

  > :nth-child(3) {
    margin-top: 4rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  /* margin: 10rem 0; */
`;

const Service = styled.div`
  span {
    display: inline-flex;
    width: fit-content;
    font-size: 2rem;
    margin-bottom: 2rem;
    background-color: rgba(156, 190, 43, 0.5);
    border-radius: 20px;
    z-index: 2;

    svg {
      padding: 1rem;
      z-index: 2;
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.font.p.lg};
    margin-bottom: 1rem;
    z-index: 2;
  }

  p {
    font-size: ${({ theme }) => theme.font.p.sm};
    z-index: 2;
  }
`;

const glass = css`
  backdrop-filter: blur(9px) saturate(164%);
  -webkit-backdrop-filter: blur(9px) saturate(164%);
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 1);
`;

const Inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  border-radius: 20px;
  overflow: hidden;
  z-index: 2;
  transition: all 0.3s ease-out;
  ${glass}

  :hover {
    background-color: rgba(255, 255, 255, 0.77);
  }

  > svg {
    position: absolute;
    top: -10rem;
    right: -10rem;
    width: 20rem;
    height: 20rem;
  }
`;
