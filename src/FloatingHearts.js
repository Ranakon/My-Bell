import React, { useMemo } from 'react';
import './FloatingHearts.css';

const FloatingHearts = () => {
  // 🧠 Generate the hearts just once!
  const hearts = useMemo(() => {
    return [...Array(10)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
    }));
  }, []); // empty dependency = only run once 💕

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
          }}
        />
      ))}
    </>
  );
};

export default FloatingHearts;
