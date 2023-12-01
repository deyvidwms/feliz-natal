import React, { useEffect } from 'react';
import './style.css';

const SnowFlake: React.FC = () => {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      document.body.appendChild(snowflake);
    };

    for (let i = 0; i < 50; i++) {
      createSnowflake();
    }
  }, []);

  return null;
};

export default SnowFlake;
