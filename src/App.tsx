import Header from "../src/component/Header"
import Footer from "./component/Footer"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Hero from "./pages/Hero"
import Project from "./pages/Project"
import Skill from "./pages/Skill"
function App() {
  return (
  <div>
    <Header/>
    <Hero/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    <Footer/>
  </div>
  )
}

export default App