import React from "react";
import { RichText } from "prismic-reactjs";
import { getPostBySlug } from "../../libs/api";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import "../../components/post/PostCard.css";
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeDown = {
  initial: { y: -20 },
  animate: { y: 0 },
};

const fadeUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const Post = ({ slug, post }) => {
  return (
    <Layout>
      <motion.div variants={stagger} className="post-card">
        <motion.h1 variants={fadeDown} className="post-card-title">
          {RichText.asText(post.data.title)}
        </motion.h1>
        <motion.p variants={fadeUp} className="post-card-content">
          {RichText.asText(post.data.content)}
        </motion.p>
      </motion.div>
    </Layout>
  );
};

Post.getInitialProps = async ({ query, req }) => {
  const { slug = null } = query;

  const post = await getPostBySlug(req, slug);

  return { slug, post };
};

export default Post;
