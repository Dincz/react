import { useState } from "react"
import QRCode from "react-qr-code"

export default function QRCodeGenerator(){
    const [input , setInput] = useState('')
    const [qrCode, setQrCode] = useState('')

    function handleGeneratorQrCode (){
        setQrCode(input)
    }
    return (
        <div>
        <h1>This is a qr code generator</h1>
        <div>
            < input onChange={(e)=>setInput(e.target.value)}           type="text" name="qr-code" placeholder="Enter the code"/>
            <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGeneratorQrCode}>Generate</button>
        </div>
        <QRCode
        id="qr-code-value"
        value={qrCode} size={400} bgColor="#fff"
        
        />
        </div>

    )
}