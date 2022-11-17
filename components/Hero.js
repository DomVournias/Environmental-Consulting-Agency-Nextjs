import Link from "next/link";
import React from "react";

import styled from "styled-components";
import { links, socials } from "../dummydata";
import { Section } from "../styles/GlobalStyles";
import SocialMedia from "./SocialMedia";

const Hero = () => {
  return (
    <Section mx="71.25rem" m="6rem auto 4rem auto" p="0 1rem 0 1rem">
      <Title>
        <span>Αξιοπιστία. </span>
        <span>Τεχνογνωσία. </span>
        <span>Συνέπεια. </span>
      </Title>
      <HeroMenu>
        <ul>
          {links.map(({ name, link }, i) => (
            <li key={i}>
              <Link href={`/${link}`}>{name}</Link>
            </li>
          ))}
        </ul>
        <SocialMedia color={`${({ theme }) => theme.black}`} />
      </HeroMenu>
    </Section>
  );
};

export default Hero;

const HeroMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    font-size: 1.6rem;
    font-weight: 500;
    display: flex;
    margin: 0;
    li {
      margin: 0 4rem 0 0;

      a {
        position: relative;
        padding: 1.2rem 0;
        display: block;

        :hover {
          ::after {
            width: 0%;
          }
        }

        ::after {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          content: " ";
          display: block;
          width: 100%;
          height: 1px;
          background: #000;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }
  }
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.font.headingLG};
  font-weight: 500;
  margin: 0 0 0.7em;

  span {
    margin-bottom: 1rem;
  }
`;
