import React, { useState, useEffect } from 'react';
import FloatingHearts from './FloatingHearts';
import './FloatingHearts.css';
import { useMemo } from 'react';
import loveQuotes from './loveQuotes';




function LoveNote() {
  const messages = useMemo(() =>loveQuotes, []);

  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const currentMessage = messages[index];
    if (charIndex < currentMessage.length) {
      const timeout = setTimeout(() => {
        setText(currentMessage.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 50); // typing speed here

      return () => clearTimeout(timeout);
    }
  }, [charIndex, index, messages]);

  const handleClick = () => {
    const next = (index + 1) % messages.length;
    setIndex(next);
    setText('');
    setCharIndex(0);
  };

  return (
    <div style={{
      position: 'relative',
      overflow: 'hidden',
      height: '100vh',
      padding: '20px',
      border: '2px solid pink',
      borderRadius: '15px',
      backgroundColor: '#fff0f6',
      textAlign: 'center',
      fontFamily: 'cursive',
      color:'#e63946'
    }}>
      <h2>💖 Love Note from Rounak 💖</h2>
      <p style={{ minHeight: '60px', fontSize: '18px' }}>{text}</p>
    <button
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      style={{
        padding: '10px 20px',
        border: 'none',
        borderRadius: '10px',
        backgroundColor: isPressed ? '#e0559e' : '#ff69b4',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: '10px',
        transition: 'background-color 0.2s ease-in-out',
      }}
    >
      Show me more love 💌
    </button>

      <FloatingHearts />

    </div>
    
  );
  
}

export default LoveNote;
