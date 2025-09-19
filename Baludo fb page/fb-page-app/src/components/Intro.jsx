import React from 'react';
import '../styles/Header.css';

function Intro() {
  return (
    <div className="post-container post-section">
      <h3>Details</h3>
      <p><strong>Bio:</strong> Carl Baludo from 2A</p>
      <p><strong>Contact Info:</strong> 09700766495</p>
      <p><strong>Feature:</strong></p>
        <div className="featured-section">
            <div className="featured-row">
                <div className="featured-box">
                <img src="./photos/photo3.jpg" alt="Feature 1" />
                <p className="featured-title">Gwapo</p>
                </div>
            </div>
            </div>
    </div>
  );
}

export default Intro;


