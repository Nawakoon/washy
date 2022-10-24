import Timer from "./Timer"

function WMachine2(props) {
    // console.log(props)
    return (
        <div className="wmachine-container">
            <div className="machine">
                <Timer className="timer"
                    latesFinish={props.item.latestFinish}
                />
                <img src={require("../img/machine-countdown.png")} />
                <p2>{props.item.name}</p2>
                <p2>{props.item.size}kg</p2>
                <p2>฿{props.item.price}</p2>
            </div>
        </div>
    )
}

export default WMachine2