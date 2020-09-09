import React from 'react';

export default () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>现在是{new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}