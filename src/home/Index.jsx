import React from 'react'
import Navber from '../header&footer/navbar';
import Footer from '../header&footer/footer';
import Dashboard from './dashboard';
import Services from './services';
import About from './about'
import Blog from './blog';
import Subscribe from './subscribe';
import Build from './build';
import How from './how-we';


export default function Index() {
  return (
  <>
    <Navber/>
    <Dashboard/>
    <About/>
    <How/>
    <Services/>
    <Blog/>
    <Build/>
    <Subscribe/>
    <Footer/>
  </>

  )
}
