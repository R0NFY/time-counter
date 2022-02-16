// Hooks
import { useEffect, useState } from 'react'
import useInterval from '../../helper/useInterval'
import {useIsMobile} from '../../helper/useIsMobile'

// Styling
import './Percents.scss'

// Components
import Motivation from '../Motivation/Motivation'
import Quote from '../Quote/Quote'

// Libraries
import { motion } from 'framer-motion'

function Percents(props) {
    const [timeLeft, setTimeLeft] = useState('Calculating...')
    const [currentTime, setCurrentTime] = useState('today')
    const isMobile = useIsMobile()
    
    const setTime = () => {

        const DAY_LENGTH = 60*60*24
        const WEEK_LENGTH = DAY_LENGTH * 7
        const YEAR_LENGTH = DAY_LENGTH * 365
        
        let date = new Date()
        let now = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()
        let updatedTime
        
        switch (props.time) {
            case 'day':
                updatedTime = (100 - (now / DAY_LENGTH * 100)).toString()
                setCurrentTime('today')
                break
            case 'week':
                now += date.getUTCDay()*DAY_LENGTH
                updatedTime = (100 - (now / WEEK_LENGTH * 100)).toString()
                setCurrentTime('this week')
                break
            case 'year':
                const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)
                now += DAY_LENGTH * dayOfYear(date)
                updatedTime = (100 - (now / YEAR_LENGTH * 100)).toString()
                setCurrentTime('this year')
        }
        if (updatedTime.length < 18) {
            updatedTime += '0'.repeat(18 - updatedTime.length)
        }
        setTimeLeft(`${updatedTime}%`)

    }
    
    useEffect(() => {
        setTime()
    })

    useInterval(() => {
        setTime()
    }, 1000)

    const variants = {
        hidden: { 
            opacity: 0, y: 30
        }, 
        visible: { 
            opacity: 1,
            transition: { 
                delayChildren: 1,
                staggerChildren: 0.5
            }
        }
    }
    
    const children = isMobile ? {
        hidden: { opacity: 0, y: 30 }, 
        visible: { opacity: 1, y: 0, transition: { duration: 1.25, ease: 'easeInOut', } }
    } : {
        hidden: { opacity: 0, y: 20 }, 
        visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeInOut', } }
    }

    return (
        <div className="container">
            <div className="text-container">
                <motion.div className="percents-wrapper" variants={variants} initial="hidden" animate="visible">
                    <motion.h1 variants={children}>You have</motion.h1>
                    <motion.h1 variants={children}>{timeLeft}</motion.h1>
                    <motion.h1 variants={children}>left of <span>{currentTime}</span></motion.h1>
                </motion.div>
                <Quote />
            </div>
            <Motivation />
        </div>
    )
}

export default Percents