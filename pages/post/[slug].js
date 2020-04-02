import React from "react";
import { RichText } from "prismic-reactjs";
import { getPostBySlug } from "../../libs/api";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";

const Post = ({ slug, post }) => {
  return (
    <Layout>
      <div className="px-2 py-2 mt-4 shadow">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-2xl text-indigo-600 font-thin hover:text-indigo-900"
        >
          {RichText.asText(post.data.title)}
        </motion.h1>
        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-gray-800 font-light text-lg"
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
