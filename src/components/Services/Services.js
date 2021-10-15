import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const StyledWrapper = styled.section`
    margin-bottom: 40px;
    margin-top: -100px;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
        margin-top: 0px;
    }
`;

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
    }
`;

const StyledItem = styled.div`
    background: #0facf1;
    width: 100%;
    text-align: center;
    padding: 30px;

    &:nth-child(2n) {
        background: #0c9ddd;
    }
`;

const StyledBgImg = styled.a`
    position: relative;
    display: block;
    width: 80px;
    height: 80px;
    text-align: center;
    background: #ffffff;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 20px;

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const StyledHeader = styled.h6`
    font-size: 1.25rem;
    color: #ffffff;
    text-transform: uppercase;
    margin-bottom: 20px;
`;

const StyledParagraph = styled.p`
    line-height: 1.6;
    font-size: 1rem;
    font-style: italic;
    color: #ffffff;
`;

const Service = ({ data }) => (
    <StyledWrapper>
        <div className="wrapper">
            <StyledContainer>
                {data.allServicesJson.nodes.map(item => (
                    <StyledItem>
                        <StyledBgImg><img src={item.featuredImage.childImageSharp.fixed.src} /></StyledBgImg>
                        <StyledHeader>{item.title}</StyledHeader>
                        <StyledParagraph>{item.body}</StyledParagraph>
                    </StyledItem>
                ))}
            </StyledContainer>
        </div>
    </StyledWrapper>
)

const Services = (props) => {
    const data = useStaticQuery(graphql`
      {
        allServicesJson {
          nodes {
            id
            title
            body
            featuredImage {
              childImageSharp {
                fixed {
                  src
                }
              }
            }
          }
        }
      }
    `)
    return <Service data={data} {...props} />
}



export default Services
