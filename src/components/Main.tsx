import React from "react";
import CharacterCard from "./CharacterCard.tsx";
import { motion, AnimatePresence } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";

const Main = ({ characters, totalPages, fetchMoreCharacters, pageNumber }) => {
  return (
    <motion.div>
      <AnimatePresence>
        <InfiniteScroll
          dataLength={characters ? characters.length : 0}
          next={fetchMoreCharacters}
          hasMore={pageNumber < totalPages ? true : false}
          loader={<h4>Loading...</h4>}
        >
          <div className="c-container">
            {characters
              ? characters?.map((character, i) => (
                  <CharacterCard {...character} key={i} />
                ))
              : "No characters found!"}
          </div>
        </InfiniteScroll>
      </AnimatePresence>
    </motion.div>
  );
};

export default Main;
