import React from 'react'
import './Motivation.scss'
import { motion } from 'framer-motion'

const Motivation = React.memo(() => {
  const variants = {
    hidden: { opacity: 0 }, 
    show: {
      opacity: 1, 
      transition: {
        delay: 1,
        duration: 1.5, 
        ease: 'easeInOut'
      }
    }
  }

  return (
    <motion.div variants={variants} initial='hidden' animate='show' className='auto-scroll'>
      <div>
        <p>spenditwiselyspenditwiselyspenditwiselyspenditwisely</p>
        <p>spenditwiselyspenditwiselyspenditwiselyspenditwisely</p>
      </div>
    </motion.div>
  )
})

export default Motivation