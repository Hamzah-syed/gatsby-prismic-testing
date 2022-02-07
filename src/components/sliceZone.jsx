import React from 'react'
import Hero from './hero'
import Service from './Service'

const SliceZone = ({ body }) => {
  console.log(body)
  return (
    <div>
      {body.map((bodyContent, i) => {
        switch (bodyContent.type) {
          case 'hero':
            return <Hero key={i} />
          case 'services':
            return <Service key={i} />
        }
      })}
    </div>
  )
}

export default SliceZone
