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

function startApp () {
    const time = new Date()
    const now = time.getTime()
    const in5sec = time.setSeconds(time.getSeconds() + 5)
    const in70sec = time.setSeconds(time.getSeconds() + 62)
    // const in14min = time.setMinutes(time.getMinutes() + 14)
    const in14min = time.setSeconds(time.getSeconds() + 75)
    
    const timeArray = [
        now,
        in5sec,
        in70sec,
        in14min,
    ]
    pushDatabase(timeArray)
}

startApp()