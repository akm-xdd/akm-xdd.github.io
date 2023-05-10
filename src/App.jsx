import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  /* background-color: purple; */
  color: White;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
      <Footer/>
    </Container>
  )
}

export default App
