import img0 from './images/rey_atanagildo.png';
import img1 from './images/rey_ataulfo.png';
import img2 from './images/rey_teodorico.png';
import img3 from './images/rey_incognito.png';
import './style.css';

function App() {
  let names = ['Rey Atanagildo', 'Rey Ataulfo', 'Rey Teodorico'];
  const changeImg = (e) => {
    if (e.target.src.includes('incognito')) {
      e.target.style.visibility = 'hidden';
    } else {
      e.target.src = img3;
    }
    e.target.parentNode.style.backgroundColor = "#FFF";
  }
  const changeText = (e) => {
    if (e.target.innerHTML === "Texto") {
      e.target.innerHTML = "";
    } else {
      e.target.innerHTML = "Texto";
    }
  }
  return (
    <div className="container">
      <div className="box">
        <img onClick={changeImg} src={img0} alt="" />
        <div onClick={changeText} className="name">{names[0]}</div>
      </div>
      <div className="box">
        <img onClick={changeImg} src={img1} alt="" />
        <div onClick={changeText} className="name">{names[1]}</div>
      </div>
      <div className="box">
        <img onClick={changeImg} src={img2} alt="" />
        <div onClick={changeText} className="name">{names[2]}</div>
      </div>
    </div>
  );
}

export default App;
