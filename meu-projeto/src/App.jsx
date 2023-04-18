import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Experience from './Components/Experience/Experience'
import Skills from './Components/Skills/Skills'
import College from './Components/College/College'
import Form from './Components/Form/Form'
import FixWpp from './Components/FixWpp/FixWpp'

import './App.css'
// Impotando CSS para usar na pagina

function App() {
  return (
    <div className="container">
      <Navbar />
      <Profile />
      {/*Todos devem estar dentro da div*/}
      <Experience/>
      <Skills/>
      <College/>
      <Form/>
      <FixWpp/>
    </div>
  )
}
export default App
