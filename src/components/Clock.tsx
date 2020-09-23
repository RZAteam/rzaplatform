import React, {useEffect,useState} from 'react';
import "./Clock.css"

export const Clock: React.FC = () => {
    const [date, setDate] = useState(new Date());

    //Replaces componentDidMount and componentWillUnmount
    useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
    }

    return (
        <div>
            <h1>Текущее время</h1>
            <h2 className="timeblock">{date.toLocaleTimeString()}</h2>
        </div>
    );
}
export default Clock;