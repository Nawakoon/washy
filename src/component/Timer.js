import { useEffect, useState } from "react"

function setTime(machineTime) {
    return (new Date().getTime()) + machineTime
}

function Timer1() {
    const [timerMinutes, setTimerMinutes] = useState()
    const [timerSeconds, setTimerSeconds] = useState()

    let interval

    const startTimer = () => {
        const countDownTime = new Date("Oct 24,2022").getTime()
        // const countDownTime = (new Date().getTime())

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownTime - now
            
            const minutes = Math.floor(
                (distance % (60 * 60 * 1000)) / (1000 * 60)
            )
            const seconds = Math.floor(
                (distance % (60 * 1000)) / (1000)
            )
            if (distance < 0) {
                // Stop Timer and change to ready
                clearInterval(interval.current)
                return (
                    <p2 className="time">ready</p2>
                )
            } else {
                // Update the Timer
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
                return (
                    <p>{timerMinutes}:{timerSeconds}</p>
                )
            }
        })
    }

    useEffect(() => {
        startTimer()
    })

    return (
            <p>{timerMinutes}:{timerSeconds}</p>
    )
}

export default Timer1;