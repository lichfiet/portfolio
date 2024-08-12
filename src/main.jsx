import './main.css';
import './output.css';
import { NavBar} from './components/navBar.jsx'
import HomePage from './pages/home.jsx';
import Projects from './pages/projects.jsx';
import WorkExperience from './pages/workExperience.jsx';
import About from './pages/about.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="work-experience" element={<WorkExperience />}></Route>
          <Route path="about" element={<About />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
