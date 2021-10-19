import * as React from "react"
import Image from 'gatsby-image'
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import styled from 'styled-components'


const ContainerImg = styled.div`
  position: relative;
  margin: 40px 0 60px 0;

  &::before {
    content: "";
    width: 642px;
    height: 400px;
    background: #0facf1;
    position: absolute;
    bottom: -90px;
    right: 0;
  }

`;

const StyledDate = styled.small`
    font-size: 1.25rem;
    display: block;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 4px;
    margin: 20px 0px;
`;

const StyledTitle = styled.h1`
    font-weight: 300;
    line-height: 1.4;
    font-size: 2.5rem;
    margin-bottom: 20px;
`;

const StyleParagraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  letter-spacing: 1px;
`;

export const query = graphql`
  query querySingleArticle($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        id
        date
        title
        slug
        featuredImage {
          childImageSharp {
            fixed(width: 700, height: 400) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
      body
    }
  }
`;

const PostLayout = ({ data }) => {
  return (
    <div className="wrapper">
      <article>
        <ContainerImg>
          <Image fixed={data.mdx.frontmatter.featuredImage.childImageSharp.fixed} />
        </ContainerImg>
        <StyledDate>{data.mdx.frontmatter.date}</StyledDate>
        <StyledTitle>{data.mdx.frontmatter.title}</StyledTitle>
        <StyleParagraph>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </StyleParagraph>
      </article>
    </div>
  );
}

export default PostLayout