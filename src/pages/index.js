import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import SliceZone from '../components/sliceZone'
import { Link } from 'gatsby'

import { RichText } from 'prismic-reactjs'

const Index = () => {
  const data = useStaticQuery(graphql`
    query homeData {
      prismic {
        allPages(lang: "en-us") {
          edges {
            node {
              page_title
              _meta {
                uid
              }
            }
          }
        }

        allHomepages {
          edges {
            node {
              body {
                ... on PRISMIC_HomepageBodyHero {
                  type
                  label
                  primary {
                    hero_content
                    hero_title
                  }
                }
                ... on PRISMIC_HomepageBodyServices {
                  type
                  fields {
                    service_name
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(data.prismic.allPages.edges[0].node.page_title)
  return (
    <div>
      {/* <SliceZone body={data.prismic.allHomepages.edges[0].node.body} /> */}

      <h1>Seo Pages</h1>
      {data.prismic.allPages.edges.map((page) => (
        // <h1 key={page.node._meta.uid}>hamzah</h1>
        <>
          {/* <Link to={`seo/${page.node._meta.uid}`}> */}
          <RichText
            htmlSerializer={(type, content, children, key) => {
              switch (type) {
                case 'heading1':
                  return (
                    <Link
                      style={{
                        display: 'block',
                        color: 'blue',
                        textDecoration: 'underline',
                      }}
                      to={`seo/${page.node._meta.uid}`}
                    >
                      {content.text}
                    </Link>
                  )
              }
            }}
            render={page.node.page_title}
          />
          {/* </Link> */}
        </>
      ))}
      {/* {data.prismic.allPages.edges.map((page) => {
        console.log(page.node)
        return (
          <p>hamzah</p>
          // <Link to={`seo/${page.node._meta.uid}`}>{page.node.page_title}</Link>
        )
      })} */}
    </div>
  )
}

export default Index
