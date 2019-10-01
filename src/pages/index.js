import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/hero'
import Info from '../components/Home/info'


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero img={data.img.childImageSharp.fluid} title="Montana Café" />  
    <Info />
    
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: {eq: "default-hero.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }`;


export default IndexPage
