const request = require("request")
require("dotenv").config()

const LINE_TOKEN = process.env.LINE_TOKEN

exports.notifyEvent = () => {
    request({
        uri: "https://notify-api.line.me/api/notify",
        method: "POST",
        auth: {
            bearer: LINE_TOKEN
        },
        form: {
            message: "1 minute left"
        }
    })
}