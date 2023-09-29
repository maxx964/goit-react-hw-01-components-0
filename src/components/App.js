import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList'; // Імпортуємо FriendList

const user = {
  username: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const statsData = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

const friendsData = [
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
    "name": "Mango",
    "isOnline": true,
    "id": 1812
  },
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/616/616438.png",
    "name": "Kiwi",
    "isOnline": false,
    "id": 1137
  },
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
    "name": "Ajax",
    "isOnline": true,
    "id": 1213
  },
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
    "name": "Jay",
    "isOnline": true,
    "id": 1714
  },
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
    "name": "Poly",
    "isOnline": false,
    "id": 1284
  }
];

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} /> {/* Додаємо FriendList */}
    </div>
  );
}

export default App;
