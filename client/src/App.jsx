import { useState } from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/homePage';

import './App.css'
import NavBar from './components/navBar'
import Carousel from './components/carousel'
import AboutPage from './pages/aboutPage';
import Footer from './components/footer';
import AddNoticePage from './pages/addNotice';
import NoticePage from './pages/noticePage';
function App() {
 const [selectedPage, setSelectedPage] = useState(1);

  return (
    <>
      
    <BrowserRouter>
    <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    <Routes>
    <Route path="/home" element={<HomePage/>}/>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/programs" element={<AddNoticePage/>}/>
    <Route path="/news-events" element={<NoticePage/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
