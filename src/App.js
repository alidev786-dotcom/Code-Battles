import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import RegisterPage from './components/RegisterPage';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GiRoundBottomFlask } from 'react-icons/gi';
import Profile from './components/Profile';
import ProfileContent from './components/ProfileContent';
import UpdateProfilePage from './components/UpdateProfilePage' ;
import ProfilePost from './components/ProfilePost';
function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/register" element={<RegisterPage/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/profilecontent" element={<ProfileContent/>}/>
              <Route path="/updateprofile" element={<UpdateProfilePage/>}/>
              <Route path="/post" element={<ProfilePost/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
