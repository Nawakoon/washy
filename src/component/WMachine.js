import Timer1 from "./Timer"

function WMachine() {
    return (
        <div className="wmachine-container">
            <div className="machine id1">
                <p2 className="time">ready</p2>
                <img src={require("../img/machine-available.png")} />
                <p1 className="machine id1 name">santitham 1</p1>
                <p2 className="machine id1 size">13kg</p2>
                <p2 className="machine id1 price">฿30</p2>
            </div>
            <div className="machine id2">
                <p2 className="time">ready</p2>
                <img src={require("../img/machine-available.png")} />
                <p1 className="machine id2 name">santitham 1</p1>
                <p2 className="machine id2 size">16kg</p2>
                <p2 className="machine id2 price">฿40</p2>
            </div>
            <div className="machine id3">
                <p2 className="time">1:40</p2>
                <img src={require("../img/machine-countdown.png")} />
                <p1 className="machine id3 name">santitham 1</p1>
                <p2 className="machine id3 size">16kg</p2>
                <p2 className="machine id3 price">฿40</p2>
            </div>
            <div className="machine id3">
                <Timer1 className="timer"/>
                <img src={require("../img/machine-countdown.png")} />
                <p1 className="machine id3 name">santitham 1</p1>
                <p2 className="machine id3 size">13kg</p2>
                <p2 className="machine id3 price">฿30</p2>
            </div>
        </div>
    )
}

export default WMachine