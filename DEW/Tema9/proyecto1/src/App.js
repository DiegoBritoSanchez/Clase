import img0 from './images/rey_atanagildo.png';
import img1 from './images/rey_ataulfo.png';
import img2 from './images/rey_teodorico.png';
import './style.css';

function App() {
  let names = ['Rey Atanagildo', 'Rey Ataulfo', 'Rey Teodorico'];
  return (
    <div className="container">
      <div className="box">
        <img src={img0} alt="Rey Atanagildo"/>
        <div className="name">{names[0]}</div>
      </div>
      <div className="box">
        <img src={img1} alt="Rey Ataulfo"/>
        <div className="name">{names[1]}</div>
      </div>
      <div className="box">
        <img src={img2} alt="Rey Teodorico"/>
        <div className="name">{names[2]}</div>
      </div>
    </div>
  );
}

export default App;
