const { machineData } = require("../database")
const { notifyEvent } = require("./notify")


function checkDistance(dis, machineId) {
    if (dis <= 60000 && dis >= 59000) {
        const message = `machine no. ${machineId} :
1 minute left`
        console.log(message)
        notifyEvent(message)
    }
}

setInterval(() => {
    const now = (new Date()).getTime()
    const latestFinish1 = machineData[0].latestFinish
    const latestFinish2 = machineData[1].latestFinish
    const latestFinish3 = machineData[2].latestFinish
    const latestFinish4 = machineData[3].latestFinish

    let distance1 = latestFinish1 - now
    let distance2 = latestFinish2 - now
    let distance3 = latestFinish3 - now
    let distance4 = latestFinish4 - now

    checkDistance(distance1, 1)
    checkDistance(distance2, 2)
    checkDistance(distance3, 3)
    checkDistance(distance4, 4)

    console.log(`m1: ${distance1 / 1000} sec`)
    console.log(`m2: ${distance2 / 1000} sec`)
    console.log(`m3: ${distance3 / 1000} sec`)
    console.log(`m4: ${distance4 / 1000} sec`)

}, 1000);