import { useState } from "react"
import Timer from "./Timer"
// need useState to render statusImg

function WMachine(props) {
    const time = new Date()
    const dataBaesTime = props.item.latestFinish

    const [statusPic, setStatusPic] = useState()

    let statusImg 
    let isAvalible
    if (time.getTime() < dataBaesTime) {
        statusImg = require("../img/machine-countdown.png")
    } else {
        statusImg = require("../img/machine-available.png")
    }
    
    return (
        <div className="wmachine-container">
            <div className="machine">
                <section className="machine--timer">
                <Timer 
                    latesFinish={props.item.latestFinish}
                />
                </section>
                <img src={statusImg} className="machine--img"/>
                <p className="machine--name">{props.item.name}</p>
                <p className="machine--size">{props.item.size}kg/฿{props.item.price}</p>
            </div>
        </div>
    )
}

export default WMachine