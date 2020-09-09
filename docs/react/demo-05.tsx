import React from 'react';

const A = props => {
  return (
    <div>
      <h1>Hello, {props.title}!</h1>
    </div>
  );
}

const B = () => {
  return (
    <>
      <A title="aaa" />
      <A title="bbb" />
    </>
  )
}

export default B