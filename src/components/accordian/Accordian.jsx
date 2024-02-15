import { useState } from "react"
import data from "./data.js"
import './style.css'
export default function Accordian(){
    const [selected, setSelected] = useState(null);
    function singleClick (id){
        setSelected(id === selected ? null : id )
    }
    const datashow = (data)=>{
        return (
            <div>
            {data.map(dataItem => <div className="item" key={dataItem.id}>
                <div onClick={()=>singleClick(dataItem.id)} className="title">
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                    {
                        selected === dataItem.id ? <div className="answer"><h4>{dataItem.answer}</h4></div> : null 
                    }
                </div>
            </div>)
            }
            </div>
        )
    }
    return(
    <div className="Wrapper">
        <div className="Accordian">
        <button>Enable Mutiple Accordian</button>
           {
             data && data.length ?  <div>`${datashow(data)}`</div> : <h1>NO DATA Present</h1>
           }
        </div> 
    </div>
    )
}

