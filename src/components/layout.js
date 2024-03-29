/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from 'gatsby'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./layout.css"



import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => (
  
  <>
  <Navbar />
  {children}
  <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
