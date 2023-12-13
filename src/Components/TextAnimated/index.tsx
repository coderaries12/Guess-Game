import {motion} from 'framer-motion'

const list = {
  visible: {
    opacity: 1,
    y: 0,
    
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
      
    },
  },
  hidden: {
    opacity: 0,
    y: -200,
  },
};
const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -200 },
};

export default function TextAnimated () {
    return(
        
        <motion.div
        variants={list}
        initial="hidden"
        animate="visible"
        className="absolute top-28 w-fit self-center text-center font-['Berkshire_Swash']  text-4xl leading-normal text-orange-700"
>
        <motion.h1 variants={item}>Test your Christmas knowledge and find the hidden word!</motion.h1>
        {/* <motion.h1 variants={item}>Edition</motion.h1> */}
      </motion.div>
    )
}
