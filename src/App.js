import { React, useState } from 'react'
import './index.css'

export default function App() {
  let CurrentTime = new Date().toLocaleTimeString();

  const [btn, setBtn] = useState(CurrentTime);
  const btnClick = () => {
    let CurrentTime = new Date().toLocaleTimeString();
    setBtn(CurrentTime)
  }

    setInterval(btnClick, 1000);

  return (
    <div className="main">
      <h1>{btn}</h1>
      {/* <button onClick={btnClick}>Click me</button> */}
    </div>
  )
}

