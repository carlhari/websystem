"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const buttons = ["Service", "About Us", "News", "Contact", "Sign In"];

const Mobile = ({ isOpen, setOpen }: any) => {
  return (
    <div className={`mobile ${isOpen ? "open" : ""}`}>
      <ul>
        {buttons.map((item, key) => {
          return (
            <li key={key}>
              {item.toLowerCase() === "sign in" ? (
                <Link href={`/signin`}>{item}</Link>
              ) : (
                <a
                  href={`/#${item.toLowerCase()}`}
                  onClick={() => setOpen(!isOpen)}
                >
                  {item}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="nav-wrapper">
      <div className="nav">
        <Link href={"/"} className="h1">
          Dummy
        </Link>

        <ul>
          {buttons.map((item, key) => {
            return (
              <li key={key}>
                {item.toLowerCase() === "sign in" ? (
                  <Link href={`/signin`}>{item}</Link>
                ) : (
                  <a href={`/#${item.toLowerCase()}`}>{item}</a>
                )}
              </li>
            );
          })}
        </ul>

        <div
          className={`hamburger-menu ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
        >
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
        </div>
      </div>

      <Mobile isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};

export default Navigation;
