import React, { useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { motion } from "framer-motion";
import NProgress from "nprogress";
import "../styles/index.css";
import "./Layout.css";

const Layout = ({ children }) => {
  useEffect(() => {
    // Progress inidcator
    Router.events.on("routeChangeStart", (url) => {
      NProgress.start();
    });

    Router.events.on("routeChangeComplete", (url) => {
      NProgress.done();
    });
    return function () {};
  }, []);
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
      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
          position: relative;
        }
        /* Make clicks pass-through */
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: #805ad5;

          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;

          width: 100%;
          height: 2px;
        }

        /* Fancy blur effect */
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px #805ad5, 0 0 5px #805ad5;
          opacity: 1;

          -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
        }

        /* Remove these to get rid of the spinner */
        #nprogress .spinner {
          display: block;
          position: fixed;
          z-index: 1031;
          top: 15px;
          right: 15px;
        }

        #nprogress .spinner-icon {
          width: 18px;
          height: 18px;
          box-sizing: border-box;

          border: solid 2px transparent;
          border-top-color: #805ad5;
          border-left-color: #805ad5;
          border-radius: 50%;

          -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
        }

        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }

        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }

        @-webkit-keyframes nprogress-spinner {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
        @keyframes nprogress-spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
