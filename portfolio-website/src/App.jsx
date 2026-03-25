import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Hero />
        <About />
        <Projects />
      </div>
    </>
  )
}

export default App
