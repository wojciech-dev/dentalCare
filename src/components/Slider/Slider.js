import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const SliderContainer = styled.section`
  position: relative;
  text-align: right;
  background: #eeeeee;
`;

const SliderOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  text-align: left;
  transform: translate(-50%, -50%);
  padding-left: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SliderHeader = styled.h1`
  font-size: 4.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #0c9ddd;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SliderParagraph = styled.p`
  display: block;
  font-size: 1.2rem;
  color: #111111;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Header = ({ data }) => (
  <SliderContainer>
    <SliderOverlay>
      <SliderHeader>DENTAL CARE</SliderHeader>
      <SliderParagraph>Changing Lives One Smile At A Time</SliderParagraph>
      <button className="button">view all services</button>
    </SliderOverlay>
    <img
      src={data.file.childImageSharp.fluid.src}
      srcSet={data.file.childImageSharp.fluid.srcSet}
      sizes={data.file.childImageSharp.fluid.sizes}
      alt=""
    />
  </SliderContainer>
)

const Slider = (props) => (
  <StaticQuery
    query={graphql`
        {
          file(name: {eq: "slider"}) {
            childImageSharp {
              fluid(maxWidth: 1065, maxHeight: 689, quality: 80) {
                src
                srcSet
                sizes
              }
            }
          }
        }
      `}
    render={data => <Header data={data} {...props} />}
  />
)



export default Slider
