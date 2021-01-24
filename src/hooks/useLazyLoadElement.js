import { useState, useRef, useEffect } from 'react'


export default function useLazyLoadElement() {
    const [display, setDisplay] = useState(false);
    const elementRef = useRef();


    useEffect(() => {
        const onChangeObserver = (entries) => {
            const el = entries[0];
            if (el.isIntersecting) {
                setDisplay(true);
                observer.disconnect();
            }
        };

        const observer = new IntersectionObserver(onChangeObserver, {
            rootMargin: '20px'
        });

        observer.observe(elementRef.current);
        return () => observer.disconnect();

    }, []);
    return { display, elementRef };
}
