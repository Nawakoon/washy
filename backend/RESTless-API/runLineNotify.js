const { machineData } = require("../database")
const { notifyEvent } = require("./notify")

// exports.runLineNotiry = () => {
// function runLineNotify() {
//     while (true) {
//         let now = (new Date()).getTime()
//         let latestFinish = machineData[2].latestFinish
//         let distance = latestFinish - now
//         // if 1 min left -> send notify
//         if (distance == 60000) {
//             notifyEvent()
//         }
//     }
// }

setInterval(() => {
    let now = (new Date()).getTime()
    let latestFinish = machineData[2].latestFinish
    let distance = latestFinish - now

    if (distance <= 60000 && distance >= 59000) {
        console.log("1 minute left")
        notifyEvent()
    }

    console.log(`time left : ${distance / 1000} second`)
}, 1000);