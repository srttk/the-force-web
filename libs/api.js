import Prismic from "prismic-javascript";
import { Client } from "./prismic-client";

/**
 * Get list of posts
 * @param {*} req
 */
export const getPosts = async req => {
  const posts = await Client(req).query(
    Prismic.Predicates.at("document.type", "posts"),
    { orderings: "[my.post.timestamp desc]" }
  );
  return posts || [];
};
