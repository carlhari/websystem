/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.push("/signin");
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (!accessToken || !refreshToken) {
      router.push("/signin");
    } else {
      router.push("/dashboard");
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Navigation />
      <div className="bg-dashboard">
        <div>Dashboard</div>
      </div>
      <div className="dashboard-content">
        {!loading ? (
          <div className="card">
            <div>Login Succeed</div>
            <button onClick={handleLogout}>Sign Out</button>
          </div>
        ) : (
          <div style={{ fontSize: "25px" }}>Loading</div>
        )}
      </div>
      <Footer />
    </>
  );
}
