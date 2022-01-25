import React, { useState } from 'react';
import './style.css';
import Buttons from './buttons';
import Form from './form';
export default function App() {
  const [val, setVal] = useState('');
  const handleClick = (e) => {
    setVal(val + e);
  };
  const onChangeFunc = (e) => {
    setVal(e.target.value);
  };
  const clear = () => {
    setVal('');
  };
  const backSpace = () => {
    setVal(val.slice(0, -1));
  };
  const calculate = () => {
    try {
      setVal(eval(val).toString());
    } catch (err) {
      setVal('Error !!!');
    }
  };
  // ÷
  const arr = [
    { btnType: 'Clear', func: clear, class: 'btn1 spec' },
    { btnType: 'C', func: backSpace, class: 'spec' },
    { btnType: '/', func: handleClick, class: 'spec' },
    { btnType: '7', func: handleClick, class: '' },
    { btnType: '8', func: handleClick, class: '' },
    { btnType: '9', func: handleClick, class: '' },
    { btnType: '*', func: handleClick, class: 'spec' },
    { btnType: '4', func: handleClick, class: '' },
    { btnType: '5', func: handleClick, class: '' },
    { btnType: '6', func: handleClick, class: '' },
    { btnType: '-', func: handleClick, class: 'spec' },
    { btnType: '1', func: handleClick, class: '' },
    { btnType: '2', func: handleClick, class: '' },
    { btnType: '3', func: handleClick, class: '' },
    { btnType: '+', func: handleClick, class: 'btn2 spec' },
    { btnType: '0', func: handleClick, class: '' },
    { btnType: '.', func: handleClick, class: '' },
    { btnType: '=', func: calculate, class: 'spec' },
  ];
  return (
    <div className="wrapper">
      {' '}
      <div className="container">
        {' '}
        <Form result={val} func={onChangeFunc} />{' '}
        <div className="keypad">
          {' '}
          {arr.map((element) => {
            return (
              <div className={`btn ${element.class}`}>
                <Buttons
                  key={element.btnType}
                  btnType={element.btnType}
                  func={element.func}
                />
              </div>
            );
          })}{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}
