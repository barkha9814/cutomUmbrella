import blueUmbrella from './asset/images/Blue umbrella.png'
import yellowUmbrella from './asset/images/Yello umbrella.png'
import pinkUmbrella from './asset/images/Pink umbrella.png'
import uploadIcon from './asset/icons/upload_icon.svg'
import loader from './asset/icons/loader_icon.svg'
import adidasLogo from './asset/icons/logo.png'
import './App.css';
import { useState } from 'react';

function App() {

  const colorButtons = [
    {id: 'blueBtn', umbrellaColor: blueUmbrella, bgColor: '#d1edf3', BtnColor: '#1eafe9', BtnShadow: '#6cc6fe 0px 0px 5px 7px', HoverColor: '#6cc6fe'},
    {id: 'yellowBtn', umbrellaColor: yellowUmbrella, bgColor: '#f5efd8db', BtnColor: '#eec721db', BtnShadow: '#f5da64db 0px 0px 5px 7px', HoverColor: '#f5da64db'},
    {id: 'pinkBtn', umbrellaColor: pinkUmbrella, bgColor: '#f6e5f0', BtnColor: '#e10995', BtnShadow: '0px 0px 5px 7px #f170b1', HoverColor: '#f170b1'},
  ]
  
  const [btnId, setBtnId] = useState('blueBtn')
  const [umbrellaColor, setUmbrella] = useState(blueUmbrella)
  const [bgColor, setBgColor] = useState("#d1edf3")
  const [btnColor, setBtnColor] = useState("#1eafe9")
  const [btnShadow, setBtnShadow] = useState("#6cc6fe 0px 0px 5px 7px")
  const [loading, setLoading] = useState(false)
  const [logo, setLogo] = useState(null)
  const [hovering, setHovering] = useState(false)
  const [hoverColor, setHoverColor] = useState('#6cc6fe')

  const changeUmbrellaColor = (id, umbrellaColor, bgColor, BtnColor, BtnShadow, HoverColor) => {
    let time = 0
    clearTimeout(time)
    setBtnId(id)
    setLoading(true)
    setBgColor(bgColor)
    setBtnColor(BtnColor)
    setBtnShadow(BtnShadow)
    setHoverColor(HoverColor)
    time = setTimeout(() => {
      setLoading(false)
      setUmbrella(umbrellaColor)
    }, 2000);
  }

  const uploadLogo = () => {
    let timeout = 0
    clearTimeout(timeout)
    setLoading(true)
    timeout = setTimeout(() => {
      setLoading(false)
      setLogo(adidasLogo)
    }, 2000);
  }

  return (
    <div className="App">
      <header className="App-header" style={{background: bgColor}}>
        {
          loading === true ?
          <img src={loader} className="loader" alt="loader" />
          :
          <div className='images'>
            <img src={umbrellaColor} className="App-logo" alt="logo" />
            {logo !== null && <img src={logo} className="logo" alt="logo" />}
          </div>
        }
        <div className='colorWrapper'>
          <h1 className='heading'>
            Custom Umbrella
          </h1>
          <div className='colorBtnWrapper'>
            {
              colorButtons && colorButtons.map((colorButton, index) => {
                return(
                  <button className={colorButton.id} key={index} id={colorButton.id} style={btnId === colorButton.id ?{ boxShadow: btnShadow} : {}} onClick={() => changeUmbrellaColor(colorButton.id, colorButton.umbrellaColor, colorButton.bgColor, colorButton.BtnColor, colorButton.BtnShadow, colorButton.HoverColor)}></button>
                )
              })
            }
          </div>
          <div className='infoWrapper'>
            <p className='info1'>Custommize your umbrella</p>
            <p className='info2'>Upload a logo for an instant preview</p>
            <p className='info3'>.png and .jpg files only. Max file size 5MB</p>
          </div>
          <button type="file" className='UploadLogoBtn'style={hovering === true ? {background: hoverColor} : {background: btnColor}} onClick={uploadLogo} onMouseOver={() =>setHovering(true)} onMouseOut={() => setHovering(false)}>
            <img src={loading === true ? loader : uploadIcon} className={loading === true ? 'loaderIcon' : 'uploadIcon' } />UPLOAD LOGO
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
