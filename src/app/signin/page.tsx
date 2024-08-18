/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import axios from "axios";

import { useRouter } from "next/navigation";

import jwt from "jsonwebtoken";

const { sign, verify } = jwt;

export default function Page() {
  const [show, setShow] = useState<boolean>(false);

  const [data, setData] = useState<any>({ username: "", password: "" });

  const [res, setRes] = useState<any>(null);

  const [disabled, setDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { username, password } = data;
    setDisabled(true);
    if (username && password) {
      try {
        const response = await axios.post("/api/login", {
          username: username,
          password: password,
        });

        const data = response.data;

        if (data.ok) {
          setRes(data);
          setData({ username: "", password: "" });
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("refreshToken", data.refreshToken);
          router.push("/dashboard");
        } else {
          setShow(true);
        }
      } catch (err: any) {
        console.error("Error submitting form:", err);
      } finally {
        setDisabled(false);
      }
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (!accessToken || !refreshToken) {
      router.push("/signin");
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  }, []);

  return (
    <>
      <Navigation />
      <div className="bg-signin">
        <div>Sign In</div>
      </div>

      <div className="signin-content">
        {!loading ? (
          <>
            <form onSubmit={handleSubmit}>
              {show && <div className="error">Login Failed</div>}
              <div className="user">
                <div>Username</div>
                <input
                  type="text"
                  name="username"
                  value={data.username}
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                  required
                />
              </div>

              <div className="pass">
                <div>Password</div>
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  required
                />
              </div>

              <div className="btns">
                <button
                  type="submit"
                  disabled={disabled}
                  aria-disabled={disabled}
                >
                  {disabled ? "Processing" : "Sign In"}
                </button>
                <div>Forget Password?</div>
              </div>
            </form>

            <div className="privacy-wrap">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </>
        ) : (
          <div style={{ fontSize: "25px" }}>Loading</div>
        )}
      </div>

      <Footer />
    </>
  );
}
