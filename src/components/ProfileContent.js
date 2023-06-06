import React from "react-dom";
import "./ProfileContent.css";
import { useEffect, useState } from "react";
//cloud libraries
import {fill, scale} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';
import {AdvancedImage} from '@cloudinary/react';
import ProfilePost from "./ProfilePost";


export default function ProfileContent() {
  
  const [profile,setProfile] = useState(null);
  const [cover,setCover] = useState(null);
  const [fileVisible,setVisible] = useState(null);
  const [coverFileVisible,setCoverFileVisible] = useState(null);
  const [responseData,setResponseData] = useState("");
  const [coverResponseData,setCoverResponseData] = useState("");

  useEffect(() => {
    //alert("changed");
    setCover(new CloudinaryImage(coverResponseData['public_id'] == null? 'empty-cover': coverResponseData['public_id'], {cloudName: 'drvo4uxiv'}));
    setProfile(new CloudinaryImage(responseData['public_id']==null? 'empty-profile':responseData['public_id'], {cloudName: 'drvo4uxiv'}));
    setVisible(false);
    setCoverFileVisible(false);
  }, [responseData,coverResponseData]);


  function submitImage(e)
  {
    const data = new FormData();
    var img = e.target.files[0];
    var blob = img.slice(0, img.size);
    var newFile = new File([blob], '1ProfilePicture', { type: `${img.type}` });
    data.append("file",newFile);
    data.append("upload_preset","CodeBattles");
    data.append("cloud_name","drvo4uxiv");
    

    fetch("https://api.cloudinary.com/v1_1/drvo4uxiv/upload",{
      method:"post",
      body:data
    }).then((res)=>res.json())
    .then((response_data)=>{console.log(response_data); alert("Profile Picture Updated!"); setResponseData(response_data)})
    .catch((err)=>console.log(err))
  }

  function submitCoverImage(e)
  {

    const data = new FormData();
    var img = e.target.files[0];
    var blob = img.slice(0, img.size);
    var newFile = new File([blob], '1CoverPicture', { type: `${img.type}` });
    data.append("file",newFile);
    data.append("upload_preset","CodeBattles");
    data.append("cloud_name","drvo4uxiv");
    

    fetch("https://api.cloudinary.com/v1_1/drvo4uxiv/upload",{
      method:"post",
      body:data
    }).then((res)=>res.json())
    .then((response_data)=>{console.log(response_data); alert("Cover Photo Updated!"); setCoverResponseData(response_data)})
    .catch((err)=>console.log(err))
  }

  

  //--by using fetch API, we are uploading our picture(uploaded by user) into cloudinary.
  //--i am setting this name to '1ProfilePicture', Here '1' is current user(logged in user)'s ID
  //-=When picture is uploaded into cloudinary, cloudinary automatically appends some 'ID' at the end
  //of the picture name. E.G, '1ProfilePicture_wbbwhbhb'.
  //--this name is obtained by fetch API response object using field 'public_id', that is, data['public_id']
  //--we have to use this name, to store into the post picture string!!

  
  return (
    <>

      <body>
      
        <div class="header__wrapper">
          <header>
              <AdvancedImage cldImg={cover} id="cover-photo"/>
              <button id="update_cover_button" onClick={()=>{setCoverFileVisible(true)}}>Update Cover</button><br/><br/>
              {
                coverFileVisible?
                <input id = "cover_file" type="file" onChange={(e)=>{submitCoverImage(e)}}/>:
                <></>
              }
          </header>
          <div class="cols__container">
            <div class="left__col">
              <div class="img__container">
              <AdvancedImage cldImg={profile} />
              <span></span>
              </div>
              <br/><br/><br/><br/>
              {/* <h2>Anna Smith</h2> */}
              <p>Ali Saleem</p><br/>
              { 
                fileVisible?
                <div>
                  <label id="profile_label">Choose Profile</label>
                  <input type="file" id="profile_picture_input" onChange={(e)=>{submitImage(e)}}/><br/><br/>
                </div> 
                : 
                <></>
              }
              <button id="update_profile_button" onClick={()=>{setVisible(true)}}>Update Picture</button><br/><br/>
              <ul class="about">
                <li>
                  <span>4,073</span>Friends
                </li>
                <li>
                  <span>322</span>Posts
                </li>
                <li>
                  <span>200,543</span>Groups
                </li>
              </ul>

              <div class="content">
                <p>
                  This is about my profile page. Haris please add another text
                  field for about myself in user entity.
                </p>

                <ul>
                  <li>
                    <i class="fab fa-twitter"></i>
                  </li>
                  <i class="fab fa-pinterest"></i>
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-dribbble"></i>
                </ul>
              </div>
            </div>
            <div class="right__col">
              <nav>
                <ul>
                  <li>
                    <a href="">Feed</a>
                  </li>
                  <li>
                    <a href="">Gallery</a>
                  </li>
                  <li>
                    <a href="">groups</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                </ul>
                <br/><br/><br/>
                <button>Update Profile</button><br/>
              </nav>
              <div class="post_css">
                <ProfilePost/><br/>
                <ProfilePost/><br/>
                <ProfilePost/><br/>
              </div>
              </div>
            </div>
          </div>
      </body>
    </>
  );
}
