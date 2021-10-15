import * as React from "react"
import Image from 'gatsby-image'
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";

export const query = graphql`
  query querySingleArticle($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        id
        title
        slug
        featuredImage {
          childImageSharp {
            fixed(width: 500) {
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
        <article>
            <h1>{data.mdx.frontmatter.title}</h1>
            <small>{data.mdx.frontmatter.date}</small>
            <Image fixed={data.mdx.frontmatter.featuredImage.childImageSharp.fixed} />
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </article>
    );
}

export default PostLayout