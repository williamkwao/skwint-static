import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import skwintLogo from '../images/skwintlogo.svg'
import lines from '../images/lines-01.png'
import SubscribeForm from '../components/subscribeForm'

const LandingSection = styled.section`
  position: relative;
  min-height: 100vh;
  color: #fff;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: top;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  .lines {
    position: absolute;
    /* top: -247px; */
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    right: -10px;
    width: 60%;
    height: calc(100vh - 72px);
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
    max-width: 567px;
    margin-top: 32px;
  }

  .content {
    max-width: 1248px;
    margin: auto;
    padding: 8px;
  }
  /*Tablet potrait*/
  @media (min-width: 768px) {
    .text-div {
      margin-top: 160px;
    }
  }
  /*Desktop*/
  @media (min-width: 992px) {
    border-bottom-left-radius: 16%;
    border-bottom-right-radius: 16%;
    min-height: calc(100vh - 80px);
  }
`
const HeaderStyle = styled.header`
  padding-top: 17px;
  padding-left: 16px;
  h1 {
    color: #fff !important;
  }


  /*Tablet potrait*/
  @media (min-width: 768px) {
    padding-top: 17px;
    padding-left: 16px;
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
      title="Skwint"
      keywords={[`skwint`, `Squint`, `inventory`, `ecommerce`]}
    />
    <LandingSection>
      <img className="lines" src={lines} />
      <Header />
      <div className="content">
      </div>
    </LandingSection>
  </Layout>
)

export default IndexPage
