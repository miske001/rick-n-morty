import React from 'react';
import {motion} from 'framer-motion'; 

const CharacterCard = ({ image, name, status }) => {

  return (
    <motion.div layout animate={{ opacity:1 }} initial={{ opacity:0 }} exit={{ opacity:0 }}>
    <div className='c-card'>
        <div className='c-img'>
            <img src={image} alt="character-img" />
            <div className={`${status === 'Alive' ? 'c-img-status-alive' : status === 'Dead' ? 'c-img-status-dead' : 'c-img-status-unknown'}`}>{status}</div>
        </div>
        <span className='c-name'>{name}</span>
    </div>
    </motion.div>
  )
}

export default CharacterCard