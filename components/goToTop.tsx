'use client'

import { useEffect, useState } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { AnimatePresence, motion } from "framer-motion";
export default function UpToTop() {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
      const handleScroll = () => {
        let y = window.pageYOffset 
        if (y > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return ( 
      <div className="fixed bottom-5  right-5">
        <AnimatePresence>
          {isVisible &&<motion.button whileHover={{scale: 1.05}} initial={{opacity:0 , y: 100}} transition={{duration: 0.1}} animate={{opacity:1 , y: 0}} exit={{opacity:0, y: 100}} onClick={scrollToTop} className={`  bg-black text-white rounded-full p-1 shadow-lg`}>
              <ArrowUpwardIcon/>
          </motion.button>}
        </AnimatePresence>
      </div>
     );
}

