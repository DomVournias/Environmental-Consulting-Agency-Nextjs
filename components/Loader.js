import React from "react";
import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <CircleLoader />
    </Wrapper>
  );
};

export default Loader;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  padding: 0.5rem;
`;

const rotate = keyframes`

  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const CircleLoader = styled.span`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 25px;
  width: 25px;
  border: 3px solid #fff;
  border-right-color: #000;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  position: absolute;
`;
