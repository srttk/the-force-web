import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "../styles/index.css";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <div className="force-container">
      <h1 className="app-name">
        <Link href="/">
          <a>the.force</a>
        </Link>
      </h1>
      <motion.main
        className="flex-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{
          duration: 0.3,
          staggerChildren: 0.5,
          when: "beforeChildren",
        }}
      >
        {children}
      </motion.main>

      <footer className="footer">
        Build with ❤️ and{" "}
        <a
          className="link"
          href="https://en.wikipedia.org/wiki/The_Force"
          target="_blank"
        >
          Force
        </a>{" "}
        by{" "}
        <span>
          <a
            className="link"
            href="https://github.com/saratonite"
            target="_blank"
          >
            Sarath
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Layout;
