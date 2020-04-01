import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "../styles/index.css";
const Layout = ({ children }) => {
  return (
    <div className="max-w-screen-lg mx-auto bg-white">
      <h1 className="text-indigo-600 text-3xl hover:text-indigo-700 hover:underline">
        <Link href="/">
          <a>the.force</a>
        </Link>
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Layout;
