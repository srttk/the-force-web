import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Quote from "../components/quote/Quote";
import { getQuotes } from "../libs/api";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Quotes = ({ quotes = [] }) => {
  return (
    <Layout>
      <motion.div variants={stagger}>
        {quotes.results.map((q) => (
          <Quote key={q.id} quote={q} />
        ))}
      </motion.div>
    </Layout>
  );
};

Quotes.getInitialProps = async ({ req }) => {
  const quotes = await getQuotes(req);

  return { quotes };
};

export default Quotes;
