import React from "react";
import { IUsersProps } from "../../types/properties";
import UserCard from "../userCard/UserCard";

import "./users.scss";

const Users: React.FC<IUsersProps> = ({ users, showMore, isLastPageUsers }) => {
  return (
    <div className='users'>
      <h1 className='users__title'>Working with GET request</h1>
      <div className='users__cards'>
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
            position={user.position}
            photo={user.photo}
          />
        ))}
      </div>
      <button
        className={`users__show-more-btn btn 
        ${isLastPageUsers ? "hidden" : ""}`}
        onClick={() => showMore()}
      >
        Show more
      </button>
    </div>
  );
};

export default Users;
