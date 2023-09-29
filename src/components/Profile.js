import React from 'react';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar-prof"
        />
        <p className="name-prof">{username}</p>
        <p className="tag-prof">{tag}</p>
        <p className="location-prof">{location}</p>
      </div>

      <ul className="stats-prof">
        <li className="item-prof">
          <span className="label-prof_1">Followers</span>
          <span className="quantity-prof">{stats.followers}</span>
        </li>
        <li className="item-prof">
          <span className="label-prof_2">Views</span>
          <span className="quantity-prof">{stats.views}</span>
        </li>
        <li className="item-prof">
          <span className="label-prof_3">Likes</span>
          <span className="quantity-prof">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
