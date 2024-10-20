import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.userData);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
