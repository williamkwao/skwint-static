import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import skwintLogo from '../images/skwint.png'
import lines from '../images/lines.svg'

const LandingSection = styled.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(242.84deg, #87c9d8 8.29%, #2684b9 92.93%);
  color: #fff;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: top;
  background-repeat: no-repeat;
  background-size: cover;
  .lines {
    position: absolute;
    top: -247px;
    right: 0;
  }
  h1,
  p {
    font-family: Montserrat;
    font-style: normal;
  }

  h1 {
    font-style: normal;
    font-weight: 600;
  }

  p {
    font-weight: normal;
  }

  .text-div {
    max-width: 650px;
    margin-top: 200px;
  }

  .content {
    padding: 0px 100px;
  }
`
const HeaderStyle = styled.header`
  padding-top: 68px;
  padding-left: 100px;
  h1 {
    color: #fff !important;
  }
`
const Header = () => {
  return (
    <HeaderStyle>
      <img src={skwintLogo} />
    </HeaderStyle>
  )
}
const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`skwint`, `Squint`, `inventory`, `ecommerce`]}
    />
    <LandingSection>
      <img className="lines" src={lines} />
      <Header />
      <div className="content">
        <div className="text-div">
          <h1>Introducing Skwint.</h1>
          <p>
            At skwint, we have some ambitious ideas. In the same way that Google
            organized the digital world, we aim to organize the phyical world.
            By creating the world’s best inventory and store management system,
            a revolutionary selling platform for vendors, and a simple (but
            accurate) browsing experience for customers, we will be able to
            deliver on those ideas.
          </p>
        </div>
      </div>
    </LandingSection>
  </Layout>
)

export default IndexPage
