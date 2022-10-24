import Timer from "./Timer"
// need useState to render statusImg

function WMachine2(props) {
    const time = new Date()
    const dataBaesTime = props.item.latestFinish

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
                <Timer className="timer"
                    latesFinish={props.item.latestFinish}
                />
                <img src={statusImg} />
                <p2>{props.item.name}</p2>
                <p2>{props.item.size}kg</p2>
                <p2>฿{props.item.price}</p2>
            </div>
        </div>
    )
}

export default WMachine2