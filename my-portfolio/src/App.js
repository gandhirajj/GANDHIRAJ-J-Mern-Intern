import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {Home} from './myport.js'
import {Education} from './education.js'
import {Project} from './project.js'
import {Certifications} from './certifications.js'
import {Skills} from './skills.js'
import {Achivements} from './achivements.js'
import  img from './my11.jpg';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

function App(){
  return(
    <Router>
      <div>
        <nav>
        <h1 class='my'> MY PORTFOLIO</h1>
        <img class='profileimg'src={img} alt='profile-img'></img>
        </nav>
        <div class='link'>
      <a 
        href="https://www.linkedin.com/in/gandhiraj-j-86744628b/" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: 'lightblue', textDecoration: 'none' }}
      >
       LinkedIn
      </a> 
      <a 
        href="https://github.com/gandhirajj" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: 'lightblue', textDecoration: 'none' }}
      >
       Github
      </a>
      <a 
        href="https://mail.google.com/mail/u/1/#inbox?compose=new" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: 'lightblue', textDecoration: 'none' }}
      >
       Email
      </a>
    </div>
        <br>
        </br>
        <nav class='nav'>
        <div class='style'>
          <span>
            <Link to='/myport'>Home</Link>
          </span>
          <span>
            <Link to="/education">Education</Link>
          </span>
          <span>
            <Link to="/project">Project</Link>
          </span>  
          <span>
            <Link to="/certifications">Certifications</Link>
          </span> 
          <span>
            <Link to="/skills">Skills</Link>
          </span>
          <span>
            <Link to="/achivements">Achivements</Link>
          </span> 
        </div>
        </nav>

        <Routes>
          <Route path="/myport" element={<Home />}/>
          <Route path="/education" element={<Education />}/>
          <Route path="/project" element={<Project />}/>
          <Route path="/certifications" element={<Certifications />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/achivements" element={<Achivements />}/> 
        </Routes>
      </div>
    </Router>
    
  )
}
export default App;