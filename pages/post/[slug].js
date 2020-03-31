import React from "react";
import { RichText } from "prismic-reactjs";
import { getPostBySlug } from "../../libs/api";

const Post = ({ slug, post }) => {
  return (
    <div>
      Post {slug}
      <h1>{RichText.asText(post.data.title)}</h1>
      <p>{RichText.asText(post.data.content)}</p>
    </div>
  );
};

Post.getInitialProps = async ({ query, req }) => {
  const { slug = null } = query;

  const post = await getPostBySlug(req, slug);

  return { slug, post };
};

export default Post;
