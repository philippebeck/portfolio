import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/main.css'

import Nav from './components/organisms/nav/nav'
import Header from './components/organisms/header/header'
import Blog from './components/organisms/blog/blog'
import Portfolio from './components/organisms/portfolio/portfolio'
import Links from './components/organisms/links/links'
import Footer from './components/organisms/footer/footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Header />
    <Portfolio />
    <Blog />
    <Links />
    <Footer />
  </React.StrictMode>
)
