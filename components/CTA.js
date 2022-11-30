import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";
import { Section } from "../styles/GlobalStyles";

const CTA = (props) => {
  return (
    <LinkStyled href="/contact">
      <span>{props.message}</span>
      <button>
        <span></span>
      </button>
    </LinkStyled>
  );
};

export default CTA;

const Inner = styled.div`
  padding: 10rem 0rem;
`;

const plusStyles = css``;

const LinkStyled = styled(Link)`
  color: #fff;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 2rem;
  /* margin: 0 auto; */
  max-width: 71.25rem;
  width: fit-content;
  position: relative;
  padding-bottom: 1rem;

  &:after {
    content: "";
    width: 100%;
    left: 0;
    height: 1px;
    position: absolute;
    bottom: 0;
    background: #fff;
    transform-origin: bottom center;
    transition: transform 0.6s cubic-bezier(0.16, 1.08, 0.38, 0.98);
  }

  span {
    font-size: ${({ theme }) => theme.font.h.lg};
    font-weight: 500;
  }

  button {
    width: 4em;
    height: 4em;
    display: inline-block;
    position: relative;
    color: #fff;

    &:before {
      top: 0;
      content: "";
      position: absolute;
      background: currentColor;
      transform-origin: top center;
      width: 0.6em;
      height: 50%;
      left: 50%;
      transform: translateX(-50%);
      transition: transform 0.6s cubic-bezier(0.26, 1.04, 0.54, 1);
    }

    &:after {
      bottom: 0;
      content: "";
      position: absolute;
      background: currentColor;
      transition: transform 0.6s cubic-bezier(0.26, 1.04, 0.54, 1);
      transform-origin: bottom center;
      width: 0.6em;
      height: 50%;
      left: 50%;
      transform: translateX(-50%);
    }

    span {
      width: 100%;
      height: 0.6em;
      overflow: hidden;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: initial;

      &:before {
        left: 0;
        content: "";
        position: absolute;
        background: currentColor;
        width: 100%;
        height: 100%;
        top: 0;
        transition: transform 0.6s cubic-bezier(0.26, 1.04, 0.54, 1);
      }

      &:after {
        right: 0;
        transform: translateX(calc(100% + 0.2em));
        content: "";
        position: absolute;
        background: currentColor;
        width: 100%;
        height: 100%;
        top: 0;
        transition: transform 0.6s cubic-bezier(0.26, 1.04, 0.54, 1);
      }
    }
  }

  :hover {
    &:after {
      content: "";
      transform: scaleY(8) translateZ(0);
      transition-duration: 0.3s;
    }

    button {
      &:before {
        transform: translate3d(-50%, 0, 0) rotate(-45deg) scaleY(1.57);
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.9, 0, 0.1, 1);
      }

      &:after {
        transform: translate3d(-50%, 0, 0) rotate(45deg) scaleY(1.57);
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.9, 0, 0.1, 1);
      }

      span {
        &:before {
          transform: translate3d(calc(-100% - 0.2em), 0, 0);
        }

        &:after {
          transform: none;
        }
      }
    }
  }
`;

const Container = styled(Link)``;
