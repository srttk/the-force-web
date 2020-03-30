import React, { Component } from "react";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { Client } from "../libs/prismic-client";

class Index extends Component {
  static async getInitialProps({ req }) {
    const posts = await Client(req).query(
      Prismic.Predicates.at("document.type", "posts"),
      { orderings: "[my.post.timestamp desc]" }
    );

    return { posts };
  }
  render() {
    const { posts = [] } = this.props;
    console.log(posts);
    return (
      <div>
        <h1>the-force</h1>
        {posts.results.map(post => (
          <div key={post.id}>
            <h1>{RichText.asText(post.data.title)}</h1>
            <p>{RichText.asText(post.data.content)}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Index;
