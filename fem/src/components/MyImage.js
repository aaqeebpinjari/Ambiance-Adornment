import React from "react";
import styled from "styled-components";

const MyImage = ({ img }) => (
  <Wrapper>
    <figure>
      <img src={img} alt={img} className="centered-image" />
    </figure>
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Centers the image vertically in the viewport */

  figure {
    text-align: center;
  }

  .centered-image {
    max-width: 100%;
    max-height: 100%;
    background-size: cover;
    object-fit: contain;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.colors.shadow};
  }
`;

export default MyImage;
