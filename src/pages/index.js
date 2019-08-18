import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <>
    <SEO
      description=''
      title='Coming soon...'
      keywords={[
        `Craftbytes`,
        `craftbyt.es`,
        `Mobile Applications`,
        `Bespoke Software development`
      ]}
    />

    <section className="hero is-fullheight">
      <header className="hero-body columns is-desktop is-vcentered">
        <div className="is-overlay has-text-centered single-spaced" style={{ top: '45%' }}>
          <img alt="Craftbytes logo" src={data.craftbytes.childImageSharp.fluid.src} width="512" />
          {/* <p className="has-text-centered" style={{ padding: '1rem', fontSize: '1.5rem' }}>
            hi there <span role="img" aria-label="waving hand">👋</span> <br />
          </p> */}
        </div>
      </header>
    </section>
  </>
)

export default IndexPage

export const query = graphql`
  query {
    craftbytes: file(relativePath: { eq: "images/cb-logo-type.png" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`
