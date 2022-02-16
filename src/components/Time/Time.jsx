import './Time.scss'
import { motion } from 'framer-motion'
import {useIsMobile} from '../../helper/useIsMobile'

function Time(props) {
    const isMobile = useIsMobile()

    const variants = isMobile ? {
        hidden: { opacity: 0 }, 
        show: {
            opacity: 1, 
            transition: {
                ease: 'easeInOut', 
                duration: 1.25
            }
        }
    }
    : {
        hidden: { opacity: 0 }, 
        show: {
            opacity: 1, 
            transition: {
                ease: 'easeInOut', 
                duration: 0.75
            }
        }
    }

    return (
        <motion.div variants={variants}>
            <input defaultChecked={props.duration == 'day' ? true : false} type="radio" name='time' id={props.duration} />
            <label htmlFor={props.duration}>{props.duration}</label>
        </motion.div>
    )
}

export default Time