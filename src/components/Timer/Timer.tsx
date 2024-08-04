import { useState, useEffect } from 'react'
import './Timer.scss'

function Timer() {

    const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);


    const day = formatNumber(time.getDate());
    const month = formatNumber(time.getMonth() + 1); 
    const year = time.getFullYear();
    const hours = formatNumber(time.getHours());
    const minutes = formatNumber(time.getMinutes());
    const seconds = formatNumber(time.getSeconds());
    return (
        <>
            <p className='timer'>{`${day}.${month}.${year} ${hours}:${minutes}:${seconds}`}</p>
        </>
    )
}

export default Timer