import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Section } from "../styles/GlobalStyles";
import gsap from "gsap";
import Swiper from "swiper";

const Executives = ({ executives }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const slider = new Swiper(".swiper-container", {
        slidesPerView: "auto",
        spaceBetween: 1,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        grabCursor: true,
      });
    });

    return () => ctx.revert();
  }, []);


  return (
    <Section pt="6rem">
      <Heading>
        <Title>Στελέχη εταιρίας</Title>
        <Description>
          Η εταιρεία μας είναι στελεχωμένη με εξειδικευμένους επιστήμονες, οι
          οποίοι διαθέτουν επαρκή γνώση και σημαντική εμπειρία, ενώ διατηρεί
          σταθερή μακροχρόνια συνεργασία με εξωτερικούς συνεργάτες από ένα ευρύ
          φάσμα έμπειρων επιστημόνων.
        </Description>
      </Heading>
      <Container className="swiper-container">
        <Wrapper className="swiper-wrapper">
          {executives.map(({ id, resume, role, title }) => (
            <Slide className="swiper-slide" key={id}>
              {/* <LinkStyled href="/"> */}
              <ImageWrapper>
                <Image
                  src={resume.photo.sourceUrl}
                  alt={title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </ImageWrapper>
              <Info className="swiper-card-info">
                <Name>{title}</Name>
                <Role>{role.position}</Role>
              </Info>
              {/* </LinkStyled> */}
            </Slide>
          ))}
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Executives;

const Container = styled.div`
  width: 100%;
  padding: 5rem 0rem;
`;

const Heading = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const Title = styled.h3`
  width: 50%;
  font-size: ${({ theme }) => theme.font.h.md};
`;

const Description = styled.p`
  width: 50%;
  font-size: ${({ theme }) => theme.font.p.md};
  text-align: left;
  color: rgba(0, 0, 0, 0.6);
`;

const Wrapper = styled.ul`
  margin: 0 auto;
  list-style: none;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;

  & .swiper-slide-active {
    transform: scale(1);
    filter: grayscale(0);

    & .swiper-card-info {
      opacity: 1;
    }
  }
`;

const Slide = styled.li`
  width: 22rem;
  min-width: 22rem;
  transition: all 200ms linear;
  transform: scale(0.85);
  filter: grayscale(0.8);
`;

const LinkStyled = styled(Link)`
  :hover {
    opacity: 1;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 32rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  opacity: 0.7;
`;

const Name = styled.p`
  font-size: ${({ theme }) => theme.font.p.md};
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Role = styled.span`
  font-size: ${({ theme }) => theme.font.p.sm};
  font-weight: 500;
`;
