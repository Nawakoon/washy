import { useEffect, useState } from "react"

function Timer(props) {
    // console.log(props.latesFinish)
    const [timerMinutes, setTimerMinutes] = useState()
    const [timerSeconds, setTimerSeconds] = useState()

    let interval

    const startTimer = () => {
        // const countDownTime = new Date("Oct 24,2022").getTime()
        // const countDownTime = (new Date().getTime())
        const countDownTime = new Date(props.latesFinish)

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownTime - now
            // const distance = 1666543396090
            
            const minutes = Math.floor(
                (distance % (60 * 60 * 1000)) / (1000 * 60)
            )
            const seconds = Math.floor(
                (distance % (60 * 1000)) / (1000)
            )
            if (distance < 0) {
                // Stop Timer and change to ready
                clearInterval(interval.current)
            } else {
                // Update the Timer
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
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

export default Timer;