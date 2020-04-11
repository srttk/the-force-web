import React from "react";
import { motion } from "framer-motion";
import { RichText } from "prismic-reactjs";
import "./Quote.css";
const fadeUp = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};
const Quote = ({ quote }) => {
  return (
    <motion.div
      variants={fadeUp}
      className="quote-card"
      style={quote.data.color ? { borderColor: quote.data.color } : {}}
    >
      <h2 className="quote-text">{RichText.asText(quote.data.text)}</h2>
      <div className="quote-author">
        <span>~ {RichText.asText(quote.data.quote_author)}</span>
      </div>
    </motion.div>
  );
};

export default Quote;
