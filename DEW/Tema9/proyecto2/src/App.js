import img from './images/rey_ervigio.png';
import img2 from './images/rey_incognito.png';
import { useRef } from 'react';
import './App.css';

function App() {
  const change = 23.16;
  const boxRef = useRef();
  const add = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    if (e.target.innerHTML >= 10) {
      e.target.innerHTML = 1;
    }
    if (e.target.innerHTML >= 8) {
      e.target.style.backgroundColor = 'red';
    } else {
      e.target.style.backgroundColor = 'white';
    }
  }
  const multiply = () => {
    boxRef.current.innerHTML = Number(boxRef.current.innerHTML) * change;
  }
  const changeImg = (e) => {
    if (e.target.src.includes("ervigio")) {
      e.target.src = img2;
    } else {
      e.target.src = img;
    }
  }
  const read = (e) => {
    boxRef.current.innerHTML = e.target.value;
  }
  return (
    <>
      <div className='box' onClick={add} ref={boxRef}>1</div>
      <button onClick={multiply}>Confirm</button>
      <div><img src={img} alt='' onClick={changeImg} /></div>
      <input className='search' onChange={read} />
    </>
  );
}

export default App;
