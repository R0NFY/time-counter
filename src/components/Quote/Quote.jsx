import React, { useEffect, useState } from 'react'
import './Quote.scss'
import { motion, useAnimation } from 'framer-motion'

const Quote = React.memo(() => {
    const [quote, setQuote] = useState({author: '', quote: ''})
    const immutable = ''
    const controls = useAnimation()

    const getQuote = async () => {
        let request = await fetch('https://api.quotable.io/random?tags=inspirational&maxLength=125')
        request = await request.json()
        setQuote({author: request.author, quote: `"${request.content}"`})
        controls.start('show')
    }

    useEffect(() => {
        getQuote()
    }, [immutable])

    const container = {
        hidden: { opacity: 0 }, 
        show: {
            opacity: 1, 
            transition: {
                delayChildren: 3,
                staggerChildren: 0.3
            }
        }
    }
    
    const body =  
    {
        hidden: { opacity: 0, y: 10 }, 
        show: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.5, ease: 'easeOut'
            } 
        }
    }

    const author = 
    {
        hidden: { opacity: 0, y: 15 }, 
        show: { 
            opacity: 1, 
            y: 0, 
            transition: {
                  duration: 0.6, ease: 'easeOut'
            } 
        }
    }

    return ( 
        <motion.div animate={controls} initial='hidden' variants={ container } id="quote">
            <motion.p variants={ body } id='quote__body'>{quote.quote}</motion.p>
            <motion.p variants={ author } id='quote__author'>{quote.author}</motion.p>
        </motion.div>
     );
})

export default Quote;