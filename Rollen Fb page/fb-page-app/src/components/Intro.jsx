import React from 'react';
import '../styles/Header.css';

function Intro() {
  return (
    <div className="post-container post-section">
      <h3>Details</h3>
      <p><strong>Bio:</strong> I am Ella Mae Rollen from 2A</p>
      <p><strong>Contact Info:</strong> 09361128928</p>
      <p><strong>Feature:</strong></p>
        <div className="featured-section">
            <div className="featured-row">
                <div className="featured-box">
                <img src="./photos/photo3.jpg" alt="Photo 3" />
                <p className="featured-title">Cutie</p>
                </div>
            </div>
            </div>
    </div>
  );
}

export default Intro;


