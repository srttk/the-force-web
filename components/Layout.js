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
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{
          duration: 0.3,
          staggerChildren: 0.5,
          when: "beforeChildren"
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Layout;
