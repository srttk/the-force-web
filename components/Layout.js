import React, { useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { motion } from "framer-motion";
import NProgress from "nprogress";
import "../styles/index.css";
import "./Layout.css";
import { ButtonLink } from "../components/ui/Button";

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
    <motion.div
      className="force-container"
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <header className="app-header">
        <h1 className="app-name">
          <Link href="/">
            <a>the.force</a>
          </Link>
        </h1>
        <nav className="flex-grow flex px-4">
          <ButtonLink href="/">Posts</ButtonLink>
          <ButtonLink href="/" color="teal">
            Quotes
          </ButtonLink>
          <ButtonLink href="/" color="yellow">
            Books
          </ButtonLink>
          <ButtonLink href="/" color="red">
            Movies
          </ButtonLink>
        </nav>
        <div className="header-right-side">
          <ButtonLink href="/">JOIN THE FORCE</ButtonLink>
        </div>
      </header>

      <main className="flex-1">{children}</main>

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
          background-color: #e2e8f0;
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
    </motion.div>
  );
};

export default Layout;
