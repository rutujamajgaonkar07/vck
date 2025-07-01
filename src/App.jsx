import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

import CoursesPage from "./pages/CoursesPage";

import AdmissionPage from "./pages/AdmissionPage";
import "./styles/Pages.css";
import "./App.css";

import Header from "./components/Header/Header";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import Footer from "./components/Footer/Footer";
// import { useState } from "react";
import ContactPage from "./pages/ContactPage";
import { useState } from "react";
import DeveloperPopup from "./components/Developer/DeveloperPopup";




const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
    return(
      <>
      <div>
        {/* Your main application content */}
        <DeveloperPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Rutuja Ganesh Majgaonkar"
          studentPhotoUrl="/public/Images/rutu.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <Router>
        <div className="main-layout">
          <Header/>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/courses" element={<CoursesPage/>}/>
               {/* <Route path="/courses" element={<Co}/>  */}
              <Route path="/contact" element={<ContactPage/>}/>
              {/* <Route path="/admissions" element={<AdmissionPage/>}/> */}
              <Route path="/admission" element={<AdmissionPage/>}/>
            </Routes>
          </div>
          <Footer/>
          <ChatbotComponent/>
      </div>
      </Router>
      </>
  )
}

export default App;
//Rutuja Ganesh Majgaonkar BCA III