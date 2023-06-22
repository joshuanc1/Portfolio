import {useState, useEffect} from 'react';


export const useSlideInScreen = (myRef, options) => {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(()=> {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting);
      })
    }, options)

    const currentTarget = myRef.current;

    if(currentTarget) observer.observe(currentTarget);
    
    return () => {
      if(currentTarget) observer.unobserve(currentTarget);
    }

  }, [myRef, options]);

  return isVisible;
}
