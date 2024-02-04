

import Navigation from './Components/Nav'
import Details from './Components/details'
import Hero from './Components/hero'
import Portfolio from './Components/portfolio'
import SectionHeading from './Components/sectionHeading'

function App() {


  return (
    <>
      <Navigation/>
      <Hero/>
      <Details />
      <SectionHeading title = "PORTFOLIO" link = "Know More"/>
      <Portfolio/>
      <SectionHeading title="Skills" link ="Know More"/>
    </>
  )
}

export default App
