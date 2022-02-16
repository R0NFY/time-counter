import './Navbar.scss'
import Time from '../Time/Time'
import { motion } from 'framer-motion'


function Navbar(props) {
    
    const times = ['day', 'week', 'year']

    const renderTimes = times.map((time, index) => 
        <Time key={index} duration={time} />
    )

    let getTime = el => {
        props.updateFromChild(el.target.id)
    }

    const variants = {
        hidden: {
        },
        show: {
            opacity: 1, 
            transition: {
                delayChildren: 1, 
                staggerChildren: 0.5
            }
        } 
    }

    return (
        <motion.nav variants={variants} initial='hidden' animate='show' onChange={getTime}>
            {renderTimes}
        </motion.nav>
    )
}

export default Navbar