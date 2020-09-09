import React, { useState, useEffect } from 'react';

export default () => {
  const [state, setState] = useState(new Date().toLocaleTimeString());

  const tick = () => {
    setState(new Date().toLocaleTimeString())
  }

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>现在是{state}.</h2>
    </div>
  );
}