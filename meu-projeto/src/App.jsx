import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Experience from './Components/Experience/Experience'

import './App.css'
// Impotando CSS para usar na pagina

function App() {
  return (
    <div className="container">
      <Navbar />
      <Profile />
      {/*Todos devem estar dentro da div*/}
      <Experience/>
    </div>
  )
}
export default App
