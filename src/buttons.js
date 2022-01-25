import React from 'react';
export default function Buttons(props) {
  return (
    <>
      <button onClick={() => props.func(props.btnType)}>{props.btnType}</button>
    </>
  );
}
