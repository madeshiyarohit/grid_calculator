import React from 'react';
export default function Form(props) {
  return (
    <>
      <div className="form">
        <input
          type="text"
          onChange={props.func}
          value={props.result}
          placeholder="0"
        />
      </div>
    </>
  );
}
