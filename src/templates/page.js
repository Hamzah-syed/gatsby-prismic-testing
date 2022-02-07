import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

export const query = graphql`
  query PageQuery($id: String) {
    prismic {
      allPages(id: $id) {
        edges {
          node {
            page_title
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

const Page = ({ data }) => {
  const title = data.prismic.allPages.edges[0].node.page_name
  return (
    <div>
      {' '}
      <RichText render={title} />{' '}
    </div>
  )
}

export default Page
