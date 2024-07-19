import React, { useEffect, useState } from 'react';
import '../../styles/Load1.css'; // Import the CSS file

export default function Load1({ isLoading, loadingComplete }) {
    const [animationComplete, setAnimationComplete] = useState(true);

    useEffect(() => {
        while (isLoading) {
            setAnimationComplete(false);
        }
        if(loadingComplete){
            setAnimationComplete(true);
        }
    }, [isLoading,loadingComplete]);

    return (
        <div className='h-screen z-10 bg-[#292927] flex items-center justify-center'>
            <div className={`loader w-full h-full flex items-center justify-center ${animationComplete ? 'loading-complete' : ''}`}>
                <div className={`circle ${animationComplete ? 'fall-and-shoot' : 'bounce'}`}></div>
            </div>
        </div>
    );
}
