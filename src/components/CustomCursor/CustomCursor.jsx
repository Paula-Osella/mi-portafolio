import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    return (
        <div
  className="hidden md:block fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[9999] mix-blend-screen bg-white opacity-10 blur-[180px] transition-transform duration-300 ease-out"

            style={{
                transform: `translate(${pos.x - 48}px, ${pos.y - 48}px)`,
            }}
        />
    );
};

export default CustomCursor;
