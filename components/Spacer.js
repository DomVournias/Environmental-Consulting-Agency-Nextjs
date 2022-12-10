import React from "react";
import styled from "styled-components";
import { Section } from "../styles/GlobalStyles";

const Spacer = () => {
  return (
    <Section>
      <Container></Container>
    </Section>
  );
};

export default Spacer;

const Container = styled.div`
  width: 100vw;
  height: 40vh;
  border-radius: 50%;
  background-color: black;
  margin-bottom: -10vh;
`;
