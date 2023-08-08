'use client'

import { useEffect, useState } from "react";

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
        <div onClick={scrollToTop} className={`fixed bottom-5 right-5 ${isVisible ? 'visible' : 'invisible'}`}>
            sss
        </div>
     );
}

