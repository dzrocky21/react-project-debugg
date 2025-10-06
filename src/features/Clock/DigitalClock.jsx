import { useEffect, useState } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString();
    }

    return (
        <div className="text-center my-4">
            {/* <h5>Live Digital Clock</h5> */}
            <div className="display-5 fw-bold">
                {formatTime(time)}
            </div>
        </div>
    )
}


export default DigitalClock