import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './components/Boton'
import Lista from './components/ListaEstudiantes'
import Estudiantes from './components/Estudiante'
import Listadoprops from './components/Listado'
import Footer from './components/Footer'
import Header from  './components/Header'
import Main from './components/Main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      
      <Main />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
         
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Estudiantes />
        <Lista nombre="Mister" edad="68"/>
        <Lista nombre="OM7" edad="65"/>
        <Boton />
         <Listadoprops />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    
    
      <Footer />
    
    
    </>

  )
}

export default App
