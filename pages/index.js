import React, { Component } from "react";
import { motion } from "framer-motion";
import PostCard from "../components/post/PostCard";

import Layout from "../components/Layout";
import { getPosts } from "../libs/api";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
class Index extends Component {
  static async getInitialProps({ req }) {
    const posts = await getPosts(req);
    return { posts };
  }
  render() {
    const { posts = [] } = this.props;

    return (
      <Layout>
        <motion.div variants={stagger}>
          {posts.results.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </motion.div>
      </Layout>
    );
  }
}

export default Index;
