import React, { Component } from "react";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
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
          <div className="px-2 py-2 mt-4 shadow" key={post.id}>
            <h1 className="text-2xl text-indigo-600 font-thin hover:text-indigo-700 hover:underline">
              <Link href="/post/[slug]" as={`/post/${post.uid}`}>
                <a>{RichText.asText(post.data.title)}</a>
              </Link>
            </h1>
            <p className="text-gray-800 font-light text-lg">
              {RichText.asText(post.data.content)}
            </p>
          </div>
        ))}
      </Layout>
    );
  }
}

export default Index;
