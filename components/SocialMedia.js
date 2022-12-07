import React from "react";
import styled from "styled-components";
import { socials } from "../dummydata";

const SocialMedia = (props) => {
  return (
    <Socials bg={props.color}>
      <p>Βρείτε μας</p>
      {socials.map(({ name, icon, link }, i) => (
        <a
          href={`${link}`}
          key={i}
          id={`${i}-${name}`}
          data-c={`${name}-data`}
          aria-label={`${name}-data-link`}
          target="_blank"
          rel="noreferrer"
        >
          {icon}
        </a>
      ))}
    </Socials>
  );
};

export default SocialMedia;

const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.bg};
  gap: 3.5rem;
  width: fit-content;

  a {
    margin-right: 0.5rem;
  }

  a,
  p {
    display: inline-flex;
  }

  p {
    font-size: 1.4rem;
    font-weight: 500;
  }

  svg {
    width: auto;
    height: 1.6rem;
  }
`;
