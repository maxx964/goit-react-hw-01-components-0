import React from 'react';
import Profile from './Profile'; 
import Statistics from './Statistics';

const user = {
  "username": "Jacques Gluke",
  "tag": "jgluke",
  "location": "Ocho Rios, Jamaica",
  "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  "stats": {
    "followers": 5603,
    "views": 4827,
    "likes": 1308
  }
};

const statsData = [
  { "id": "id-1", "label": ".docx", "percentage": 22 },
  { "id": "id-2", "label": ".pdf", "percentage": 4 },
  { "id": "id-3", "label": ".mp3", "percentage": 17 },
  { "id": "id-4", "label": ".psd", "percentage": 47 },
  { "id": "id-5", "label": ".pdf", "percentage": 10 }
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
    </div>
  );
}

export default App;
