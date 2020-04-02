import React, { Component } from "react";
import PostCard from "../components/post/PostCard";

import Layout from "../components/Layout";
import { getPosts } from "../libs/api";

class Index extends Component {
  static async getInitialProps({ req }) {
    const posts = await getPosts(req);
    return { posts };
  }
  render() {
    const { posts = [] } = this.props;

    return (
      <Layout>
        {posts.results.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </Layout>
    );
  }
}

export default Index;
