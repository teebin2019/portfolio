import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { useNavigate } from "react-router";

import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const navigate = useNavigate();

  const userData = async () => {
    const myHeaders = new Headers();
    const token = localStorage.getItem("token");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/auth/profile",
        requestOptions
      );
      const result = await response.json();
      console.log(result);
      if (result.message === "Invalid or expired token") {
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    userData();
  });

  return (
    <div>
      <Sidebar />
      {/* will either be <Home/> or <Settings/> */}
      <Outlet />
    </div>
  );
}
