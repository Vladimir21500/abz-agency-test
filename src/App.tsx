import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Users from "./components/users/Users";
import SignUp from "./components/signUp/SignUp";
import Registered from "./components/registered/Registered";
import {
  getUsers,
  getUserPositions,
  getToken,
  createUser,
} from "./gateway/gateway";
import { IUserInfo, IUserPosition } from "./types/user";

// catch all errors !!!
// 2. fix problem with shrink banner
// 3. stylezation input(fileType) (no picture title)
// 4. add new color fot radio button
// 5.0 typyzation improve
// 5. refactoring
// 6. deploy and finish tests

const App = () => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [users, setUsers] = useState<IUserInfo[] | []>([]);
  const [userPositions, setUserPositions] = useState<IUserPosition[] | []>([]);
  const [isLastPageUsers, setIsLastPageUsers] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getUsers(currentPage).then((data) => {
      setUsers([...users, ...data.users]);
      setIsLastPageUsers(data.page === data.total_pages);
    });
  }, [currentPage]);

  useEffect(() => {
    getUserPositions().then((positions) => {
      setUserPositions(positions);
    });
  }, []);

  const registration = async (userData): void => {
    console.log(userData);

    const token = await getToken();

    const response = await createUser(userData, token.token);
    console.log("response", response);

    if (!response.success) {
      alert(response.message);
    }

    setIsRegistered(true);
    setCurrentPage(1);
    getUsers(currentPage).then((data) => {
      setUsers(data.users);
      setIsLastPageUsers(data.page === data.total_pages);
    });
  };

  const moveToUsers = () => {
    const usersElem = document.querySelector(".users__title");
    usersElem.scrollIntoView({ block: "center", inline: "center" });
  };

  const moveToSignUp = () => {
    const signUpElem = document.querySelector(".sign-up__title");
    signUpElem.scrollIntoView({ block: "center", inline: "center" });
  };

  const showMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className='page'>
      <Header moveToUsers={moveToUsers} moveToSignUp={moveToSignUp} />
      <Banner moveToSignUp={moveToSignUp} />
      <Users
        users={users}
        showMore={showMore}
        isLastPageUsers={isLastPageUsers}
      />
      {isRegistered ? (
        <Registered />
      ) : (
        <SignUp positions={userPositions} registration={registration} />
      )}
    </div>
  );
};

export default App;
