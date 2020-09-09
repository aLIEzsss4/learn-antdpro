import React, { useState } from 'react';

export default () => {
  const [state, setState] = useState(new Date().toLocaleTimeString());
  
  const onClick=()=>{
    setState(new Date().toLocaleTimeString())
  }

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>现在是{state}.</h2>
      <button onClick={onClick}>点击更新时间</button>
    </div>
  );
}