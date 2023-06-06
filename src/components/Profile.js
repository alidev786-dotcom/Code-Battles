import React from "react-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Profile.css';
import ProfileContent from "./ProfileContent";

export default function Profile() {
  return (
    <>
      <div className="hero">
        <Navbar />
        <br/>
        <div className="profilebody">
          <ProfileContent/>
        </div>
        <Footer />
      </div>
    </>
  );
}
