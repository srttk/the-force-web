import React from "react";
import Link from "next/link";
import "./Button.css";

export const ButtonLink = ({ href, children, color = null }) => {
  const baseClass = color ? `b-${color}` : "b-primary";
  return (
    <Link href={href}>
      <a className={`f-btn ${baseClass}`}>{children}</a>
    </Link>
  );
};
