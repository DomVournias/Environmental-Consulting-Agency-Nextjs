import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function ServicesImages({ image, id, index, activeImageIndex }) {
  return (
    <ImageInner>
      <ImageBlock
        imageOpacity={index === activeImageIndex ? "1" : "0"}
        scale={index === activeImageIndex ? "scale(1)" : "scale(1.1)"}
      >
        <Image
          id={id}
          src={image}
          alt={`geon goals image ${index}`}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </ImageBlock>
    </ImageInner>
  );
}

const ImageInner = styled.li`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const ImageBlock = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  transition: all 1s ease-in-out;
  transform: ${(props) => props.scale};
  opacity: ${(props) => props.imageOpacity};
`;
