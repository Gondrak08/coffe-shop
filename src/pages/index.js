import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/hero'
import Info from '../components/Home/info'
import Menu from '../components/Home/menu'


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero img={data.img.childImageSharp.fluid} title="Montana Café" />  
    <Info />
   <Menu items={data.menu} />
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
    menu:allContentfulCoffeeItem{
      edges{
        node{
          id
          title
          description{
            description
          }
          price
          category
          image{
           fixed(width:50,height:50){
            ...GatsbyContentfulFixed_tracedSVG
          }
          }
        }
      }
    }
  }
  `;


export default IndexPage
