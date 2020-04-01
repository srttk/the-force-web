import React from "react";
import Link from "next/link";
import "../styles/index.css";
const Layout = ({ children }) => {
  return (
    <div className="max-w-screen-lg mx-auto bg-white">
      <h1 className="text-indigo-600 text-3xl hover:text-indigo-700 hover:underline">
        <Link href="/">
          <a>the.force</a>
        </Link>
      </h1>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
