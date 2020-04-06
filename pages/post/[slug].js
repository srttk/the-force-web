import React from "react";
import { RichText } from "prismic-reactjs";
import { getPostBySlug } from "../../libs/api";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import "../../components/post/PostCard.css";

const Post = ({ slug, post }) => {
  return (
    <Layout>
      <div className="post-card">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="post-card-title"
        >
          {RichText.asText(post.data.title)}
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="post-card-content"
        >
          {RichText.asText(post.data.content)}
        </motion.p>
      </div>
    </Layout>
  );
};

Post.getInitialProps = async ({ query, req }) => {
  const { slug = null } = query;

  const post = await getPostBySlug(req, slug);

  return { slug, post };
};

export default Post;
