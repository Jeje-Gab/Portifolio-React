import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'

import './App.css'
// Impotando CSS para usar na pagina

function App() {
  return (
    <div className="container">
      <Navbar />
      <Profile />
      {/*Todos devem estar dentro da div*/}
      
    </div>
  )
}
export default App
