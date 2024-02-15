import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState("#000000");
   function randomColorUtility (length){
    return Math.floor(Math.random()*length)
   }
   function randomHexColor(){
    const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexValue = "#";
    for (let index = 0; index < 6; index++) {
         hexValue += hex[randomColorUtility(hex.length)]   
    }
    setColor(hexValue);
  }
  function randomRgbColor(){
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)
    setColor(`rgb(${r},${g},${b})`)
  }
  useEffect(() => {
    if (typeOfColor === "rgb") randomRgbColor();
    else randomHexColor();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeOfColor]); 
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={()=>{setTypeOfColor('hex')}}>Create HEX COLOR</button>
      <button onClick={()=>{setTypeOfColor('rgb')}}>Create RGB COLOR</button>
      <button onClick={()=>{typeOfColor === 'hex' ? randomHexColor() : randomRgbColor()}}>ChangeColor</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'20px'
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
        </div>
    </div>
  );
}
