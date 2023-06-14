import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Experience from './Components/Experience/Experience'
import Skills from './Components/Skills/Skills'
import College from './Components/College/College'
import Form from './Components/Form/Form'
import FixWpp from './Components/FixWpp/FixWpp'

import './App.css'
// Impotando CSS para usar na pagina

const sections = 
    document.querySelectorAll("section"),
  navLinks = 
    document.querySelectorAll("nav a");

const resetLinks = () => 
  navLinks.forEach(link => 
    link.classList.remove("active")
  );

const handleScroll = () => {
  const { pageYOffset } = window;
  sections.forEach(section => {
    const { id, offsetTop, clientHeight } =
      section;
    const offset = offsetTop -1;

    if (
      pageYOffset >= offset && 
      pageYOffset < offset + clientHeight) {
        resetLinks();
        navLinks.forEach(link => {
          if (link.dataset.scroll === id) {
            link.classList.add("active")
          }
        });
      }
  });
};

document.addEventListener("scroll", handleScroll);

function App() {
  return (
    <div className="container">
      <Navbar />
      <Profile />
      <Experience/>
      <Skills/>
      <College/>
      <Form/>
      <FixWpp/>
    </div>
  )
}
export default App
