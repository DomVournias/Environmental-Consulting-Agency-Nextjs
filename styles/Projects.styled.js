import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding-left: 1em;
  padding-right: 1em;
  margin-bottom: ${({ theme }) => theme.margin.bottom.s10};
  z-index: 3;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: var(--xl);
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;
  overflow: visible;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    padding-right: 3em;

    svg {
      color: ${({ theme }) => theme.blue};
    }

    :hover {
      svg {
        transform: translate(10px, 5px);
      }
    }
    span {
      font-size: ${({ theme }) => theme.font.p.lg};
      font-weight: 600;
    }
  }
`;

export const Title = styled.h3`
  display: block;
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.font.h.md};
  color: ${({ theme }) => theme.black};
  z-index: 300;
  /* mix-blend-mode: difference; */
`;

export const Blob = styled.div`
  display: block;
  position: absolute;
  top: -5rem;
  left: -5rem;
  z-index: 900;
  width: 14rem;
  height: 14rem;
  mix-blend-mode: difference;
  border-radius: 50%;
  background-color: #fff;
`;

export const Content = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 45em;
  margin: 0;
`;

export const Links = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 20%;
  margin: 0;
  font-size: ${({ theme }) => theme.font.h.md};
  font-weight: 500;
  overflow: hidden;
  z-index: 3;

  a {
    display: flex;
    gap: 1em;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem 1rem;
  }
`;

export const Project = styled.li`
  color: ${(props) => props.col};
  background-color: ${(props) => props.bg};
`;

export const Arrow = styled(BsArrowRight)`
  font-size: 3.7rem;
  stroke-width: 0.4;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${(props) => props.opacity};
  transform: ${(props) => props.translate};
`;

export const Images = styled.ul`
  display: block;
  margin: 0;
  width: 100%;
  height: 100%;

  > div {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    padding: 0;
    vertical-align: baseline;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 20%,
      rgba(255, 255, 255, 0) 36%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

export const ListItem = styled.li`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 0;
  vertical-align: baseline;
  width: 100%;
  height: 100%;
  list-style: none;
  opacity: ${(props) => props.opacity};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  > div {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;

    img {
      padding-left: 18rem;
      border-radius: 20px;
      overflow: hidden;
    }
  }
`;
