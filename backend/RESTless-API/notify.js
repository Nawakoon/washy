const request = require("request")
require("dotenv").config()

const LINE_TOKEN = process.env.LINE_TOKEN || "set your LINE_TOKEN here"

exports.notifyEvent = (msg) => {
    request({
        uri: "https://notify-api.line.me/api/notify",
        method: "POST",
        auth: {
            bearer: LINE_TOKEN
        },
        form: {
            message: msg
        }
    })
}