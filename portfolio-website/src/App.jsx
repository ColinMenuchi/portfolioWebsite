import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </div>
    </>
  )
}

export default App
