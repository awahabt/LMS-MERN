import { AuthContext } from "@/context/auth-context";
import React, { useContext } from "react";

const StudentHomePage = () => {
  const {resetCredentials} = useContext(AuthContext) 
  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }
  return <div>Home Page
    <button onClick={handleLogout}>Log Out</button>
  </div>;
};

export default StudentHomePage;
