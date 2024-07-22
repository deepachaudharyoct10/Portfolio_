import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLink from "./components/SocialLink";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <div >
    
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Project></Project>
      <Skills></Skills>
      <Contact></Contact>
      <SocialLink></SocialLink>
     
    </div>
  );
}

export default App;
