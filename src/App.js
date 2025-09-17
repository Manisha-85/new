
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

import Contact from "./components/pages/Contact";
import Facilities from "./components/pages/Facilities/FacilitiesPage";

import About from "./components/pages/About Us";
import ProgramsPage from "./components/pages/Program/ProgramsPages";
import TrainerPage from "./components/pages/Trainerpage/TrainersPage";
import BookNow from "./components/pages/BookNow";
function App() {
  return (
<Router>
     
        <Header />

        <Routes>
         
          <Route path="/" element={<Home/>} />
          <Route path="program" element={<ProgramsPage/>}/>
          <Route path="facility" element={<Facilities/>}/>
          <Route path="trainers" element={<TrainerPage/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/book" element={<BookNow/>}/>
        </Routes>
     
      
    </Router>
    );
}

export default App;