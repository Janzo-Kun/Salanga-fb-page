import React from 'react';
import '../styles/Friends.css';

const friendsData = [
  { name: 'Jan Jeremy Salanga', image: './salanga.jpg' },
  { name: 'Ella Mae Rollen', image: './rollen.jpg' },
  { name: 'Rik D Se', image: './sedrik.jpg' },
];

function Friends() {
  return (
    <div className="friends-section">
      <div className="friends-header">
        <h2>Friends</h2>
        <a href="#" className="see-all">See all friends</a>
      </div>
      <p className="friend-count">1.9K friends ● 3 Mutual Friends</p>

      <div className="friends-grid">
        {friendsData.map((friend, idx) => (
          <div className="friend-card" key={idx}>
            <img src={friend.image} alt={friend.name} className="friend-image" />
            <p className="friend-name">{friend.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Friends;
