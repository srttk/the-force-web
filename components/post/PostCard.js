import React from "react";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import "./PostCard.css";
const PostCard = ({ post }) => {
  return (
    <div className="post-card" key={post.id}>
      <h1 className="post-card-title">
        <Link href="/post/[slug]" as={`/post/${post.uid}`}>
          <a>{RichText.asText(post.data.title)}</a>
        </Link>
      </h1>
      <p className="post-card-content">{RichText.asText(post.data.content)}</p>
    </div>
  );
};

export default PostCard;
