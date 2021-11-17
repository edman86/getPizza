import { useEffect, useRef } from 'react';
import './badge.scss';

const Badge = ({ label }) => {
    const badgeRef = useRef();
    
    useEffect(() => {
        
        // To make the animation work every time when 
        // the counter (label) is updated - turning off 
        // the display property of component 
        // for 100 milliseconds, then display it again. 
        // When it displayed, the animation starts playing.
        
        badgeRef.current.style.display = 'none';
        
        setTimeout(() => {
            badgeRef.current.style.display = 'block';
        }, 100);
        
    }, [label]);
    
    return (
        <div className="badge" ref={badgeRef}>
            {label}
        </div>
    );
};

export default Badge;