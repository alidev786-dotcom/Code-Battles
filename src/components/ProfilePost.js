import React from "react-dom";
import desktop_wallpaper from "../desktop_wallpaper.jpg";
import logo from "../logo.svg";
import './ProfilePost.css';

export default function ProfilePost() {
  return (
    <>
      <div class="f-card">
        <div class="header">
          <div class="options">
            <i class="fa fa-chevron-down"></i>
          </div>
          <img class="co-logo" src={logo} />
          <div class="co-name">
            <a href="#">PureCSS</a>
          </div>
          <div class="time">
            <a href="#">2hrs</a> · <i class="fa fa-globe"></i>
          </div>
        </div>
        <div class="content">
          <p>
            Height is optional, if no height is specified the image will be a
            square.Example:{" "}
            <a href="http://placehold.it/300">http://placehold.it/300</a> See
            More
          </p>
        </div>

        <div class="reference">
          <img class="reference-thumb" src={desktop_wallpaper} />
          <div class="reference-content">
            <div class="reference-title">
              A quick and simple image placeholder service. | PLACEHOLDER.it
            </div>
            <div class="reference-subtitle">
              How does it work? Just put your image size after our URL and
              you'll get a placeholder.
            </div>
            <div class="reference-font">placeholder.it</div>
          </div>
        </div>
        <div class="social">
          <div class="social-content"></div>
          <div class="social-buttons">
            <span>
              <i class="fa fa-thumbs-up"></i>Like
            </span>
            <span>
              <i class="fa fa-comment"></i>Comment
            </span>
            <span>
              <i class="fa fa-share"></i>Share
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
