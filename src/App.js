import './App.css';
import Aboutme from './components/Aboutme';
import Education from './components/Education';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App position-relative">
     <Profile/>
     <Aboutme/>
     <Education />
     <Projects />
     <Footer />
     
    </div>
  );
}

export default App;
