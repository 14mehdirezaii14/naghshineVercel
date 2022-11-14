import styles from './HeaderTitle1.module.css'
import { useEffect } from 'react'
import { motion } from "framer-motion";
const HeaderTitle1 = ({ bgTitle, title }: { bgTitle: string, title: string }) => {
    return (
        <div className="headBlog mt-10 relative overflow-hidden  text-center">
            <div className={styles.bgTitleStatic}>
                {bgTitle.split(',').map((word, index) => {
                    return (
                        <motion.div
                            initial={{ y: `-${index += 1}00`,opacity:0 }}
                            animate={{ y: 0 ,opacity:1}}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            key={index} className={`${styles.bgTitleDiv} inline-block`}>
                            {word.toUpperCase()}
                        </motion.div>
                    )
                })}
            </div>
            {/* {title} */}
            {title.split(',').map((word, index) => {
                return (
                    <motion.div
                        initial={{ y: `${index += 2}00`,opacity:0 }}
                        animate={{ y: 0 ,opacity:1}}
                        transition={{
                            duration: 0.8,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        key={index} className={`${styles.title} relative overflow-hidden inline-block  text-center`}>
                        {word.toUpperCase()}
                    </motion.div>
                )
            })}
        </div>
    )
}

export default HeaderTitle1