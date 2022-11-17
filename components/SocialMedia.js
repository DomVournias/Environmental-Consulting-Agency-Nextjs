import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { socials } from "../dummydata";

const SocialMedia = (props) => {
  return (
    <Socials color={props.color}>
      <p>Βρείτε μας</p>
      {socials.map(({ name, icon, link }, i) => (
        <Link href={`${link}`} key={i} id={name}>
          {icon}
        </Link>
      ))}
    </Socials>
  );
};

export default SocialMedia;

const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.color};
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
