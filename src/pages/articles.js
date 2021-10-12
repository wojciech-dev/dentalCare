import * as React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

const Articles = styled.section`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  gap: 10px 10px;

  @media (max-width: 1140px) {
    grid-template-columns: 1fr 1fr; 
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
    text-align: center;
  }

`;

const ArticlesWrapper = styled.div`
  margin: 40px 0px;
`;

const ArticlesHeader = styled.h6`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const ArticlesParagraph = styled.p`
    font-style: italic;
    color: #808080;
    line-height: 1.5;
`;


const ArticlesPage = ({ data }) => (
  <div className="wrapper">
    <div className="header">
      <h1>Articles</h1>
      <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
    </div>
    <Articles>
      {data.allMdx.nodes.map(item => (
        <div key={item.frontmatter.id}>
          <img src={item.frontmatter.featuredImage.childImageSharp.fluid.src} />
          <ArticlesWrapper>
            <ArticlesHeader>{item.frontmatter.title}</ArticlesHeader>
            <ArticlesParagraph>{item.excerpt}</ArticlesParagraph>
          </ArticlesWrapper>
        </div>
      ))}
    </Articles>
  </div>
)

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          id
          title
          slug
          date
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 360, maxHeight: 370, quality: 80) {
                src
              }
            }
          }
        }
        excerpt(pruneLength: 100)
      }
    }
  }
`

export default ArticlesPage
