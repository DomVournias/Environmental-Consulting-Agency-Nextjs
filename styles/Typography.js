import styled from "styled-components";

export const H3 = ({ children }) => {
  return (
    <>
      <H3s>{children}</H3s>
    </>
  );
};

const H3s = styled.h3`
  font-weight: 500;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 4.7rem;
  }
`;
