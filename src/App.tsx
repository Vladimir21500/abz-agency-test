import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Users from "./components/users/Users";
import SignUp from "./components/signUp/SignUp";
import Loader from "./components/loader/Loader";
import Registered from "./components/registered/Registered";
import {
  getUsers,
  getUserPositions,
  getToken,
  createUser,
} from "./gateway/gateway";
import { IUserInfo, IUserPosition } from "./types/user";

const App: React.FC<{}> = () => {
  const [users, setUsers] = useState<IUserInfo[] | []>([]);
  const [userPositions, setUserPositions] = useState<IUserPosition[] | []>([]);
  const [isLastPageUsers, setIsLastPageUsers] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getUsers(currentPage).then((data) => {
      if (currentPage === 1) {
        setUsers([...data.users]);
      } else {
        setUsers([...users, ...data.users]);
      }
      setIsLastPageUsers(data.page === data.total_pages);
    });
  }, [currentPage, isRegistered]);

  useEffect(() => {
    getUserPositions().then((positions) => {
      setUserPositions(positions);
    });
  }, []);

  const registration = async (userData: any) => {
    setIsLoading(true);
    const token = await getToken();
    const response = await createUser(userData, token.token);
    setIsLoading(false);
    if (response.success) {
      setIsRegistered(true);
      setCurrentPage(1);
    }
  };

  const moveToUsers = () => {
    const usersElem = document.querySelector(".users__title") as HTMLElement;
    usersElem.scrollIntoView({ block: "center", inline: "center" });
  };

  const moveToSignUp = () => {
    const signUpElem = document.querySelector(".sign-up__title") as HTMLElement;
    signUpElem.scrollIntoView({ block: "center", inline: "center" });
  };

  const showMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const signUp = isRegistered ? (
    <Registered />
  ) : (
    <SignUp positions={userPositions} registration={registration} />
  );

  return (
    <div className='page'>
      <Header moveToUsers={moveToUsers} moveToSignUp={moveToSignUp} />
      <Banner moveToSignUp={moveToSignUp} />
      <Users
        users={users}
        showMore={showMore}
        isLastPageUsers={isLastPageUsers}
      />
      {isLoading ? <Loader /> : signUp}
    </div>
  );
};

export default App;
