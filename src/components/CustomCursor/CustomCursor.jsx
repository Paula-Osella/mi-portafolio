import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0,
        background: 'radial-gradient(circle, rgba(110,231,183,0.04) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.15s ease-out',
      }}
    />
  );
};

export default CustomCursor;
