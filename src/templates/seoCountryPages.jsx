import React from 'react'
// Gatsby
import { useStaticQuery, graphql } from 'gatsby'
// Prismic
import { RichText } from 'prismic-reactjs'
// Components
import SliceZone from '../components/sliceZone'

export const query = graphql`
  query getSeoCountryPages($id: String!) {
    prismic {
      allPages(id: $id) {
        edges {
          node {
            page_title
            content
            body {
              ... on PRISMIC_PageBodyHero {
                type
                label
                primary {
                  hero_content
                  hero_title
                }
              }
              ... on PRISMIC_PageBodyServices {
                type
                label
                fields {
                  service_name
                }
              }
            }
            _meta {
              uid
              id
            }
          }
        }
      }
    }
  }
`

const SeoCountryPages = ({ data }) => {
  console.log(data)
  const pageTitle = data.prismic.allPages.edges[0].node.page_title
  const content = data.prismic.allPages.edges[0].node.content
  return (
    <>
      <RichText render={pageTitle} />
      {/*/ Rich Text Serialize **********************************/}
      {/* <RichText
        htmlSerializer={(type, content, children, key) => {
          switch (type) {
            case 'paragraph':
              return (
                <p style={{ color: 'red' }} key={key}>
                  {content.text}
                </p>
              )
          }
        }}
        render={content}
      /> */}
      <div>
        <SliceZone body={data.prismic.allPages.edges[0].node.body} />
      </div>
    </>
  )
}

export default SeoCountryPages
