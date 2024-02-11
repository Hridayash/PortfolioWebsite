

import Navigation from './Components/Nav'
import Contact from './Components/contacts'
import Details from './Components/details'
import Footer from './Components/footer'
import Hero from './Components/hero'
import Portfolio from './Components/portfolio'
import SectionHeading from './Components/sectionHeading'
import Skills from './Components/skills'



export default function App() {

 

  return (
    <>
      <Navigation/>
      <Hero/>
      <Details />
      <SectionHeading title = "PORTFOLIO" link = "Know More"/>
      <Portfolio/>
      <SectionHeading title="SKILLS" link ="Know More"/>
      <Skills/>
      <SectionHeading title = "CONTACT"/>
      <Contact/>
      <Footer/>
   </>
  )
}


