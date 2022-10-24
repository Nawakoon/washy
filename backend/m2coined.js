const dataBase = require("./database.js")
const {writeFileSync} = require('fs')

function pushDatabase (timeArray) {
    const format = (
`const machineData = [
    {
        id: 1,
        latestFinish: ${timeArray[0]},
        name: "santitham 1",
        size: 13,
        price: 30,
        spinTime: 25, //min
    },
    {
        id: 2,
        latestFinish: ${timeArray[1]},
        name: "santitham 1",
        size: 16,
        price: 40,
        spinTime: 29,
    },
    {
        id: 3,
        latestFinish: ${timeArray[2]},
        name: "santitham 1",
        size: 16,
        price: 40,
        spinTime: 29,
    },
    {
        id: 4,
        latestFinish: ${timeArray[3]},
        name: "santitham 1",
        size: 13,
        price: 30,
        spinTime: 25,    
    },
]`
    )
    writeFileSync(
        "../src/localDatabase.js",
        `${format}
export default machineData`
    )
    writeFileSync(
        "./database.js",
        `${format}
module.exports = {machineData}`
    )
}

function coinedMachine2 () {
    const time = new Date()
    const dataBaesTime = dataBase.machineData[1].latestFinish
    const workTime = dataBase.machineData[1].spinTime
    
    if (time.getTime() < dataBaesTime) {
        console.log("machine used, please use another machine")
    } else {
        time.setMinutes(time.getMinutes() + workTime)
        const timeArray = [
            dataBase.machineData[0].latestFinish,
            time.getTime(),
            dataBase.machineData[2].latestFinish,
            dataBase.machineData[3].latestFinish,
        ]
        pushDatabase(timeArray)
        console.log(`machine start! ${workTime} min. left`)
    }
}

coinedMachine2()