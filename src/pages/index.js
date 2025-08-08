import React from 'react'

import SEO from '../components/seo';
import logoType from '../images/cb-logo-type.png';

const IndexPage = () => {
  return (
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

      <section className="hero is-fullheight has-background-blue">
        <header className="hero-body columns is-desktop is-vcentered">
          <div className="is-overlay has-text-centered single-spaced" style={{ top: '45%' }}>
            <img 
              src={logoType}
              alt="Craftbytes logo" 
              style={{ maxWidth: '512px', margin: '0 auto', display: 'block' }}
            />
            {/* <p className="has-text-centered" style={{ padding: '1rem', fontSize: '1.5rem' }}>
              hi there <span role="img" aria-label="waving hand">👋</span> <br />
            </p> */}
          </div>
        </header>
      </section>
    </>
  )
}

export default IndexPage
