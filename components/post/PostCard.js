import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import "./PostCard.css";

const fadeSide = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 2, x: 0 },
};

const PostCard = ({ post }) => {
  return (
    <motion.div className="post-card" key={post.id} variants={fadeSide}>
      <h1 className="post-card-title">
        <Link href="/post/[slug]" as={`/post/${post.uid}`}>
          <a>{RichText.asText(post.data.title)}</a>
        </Link>
      </h1>
      <p className="post-card-content">{RichText.asText(post.data.content)}</p>
    </motion.div>
  );
};

export default PostCard;
