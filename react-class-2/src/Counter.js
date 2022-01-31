import { useState, useEffect } from "react";

const Counter = ({ colors }) => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(colors[0]);

    const handleIncrease = () => {
        setCount(count + 1);
    };

    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    useEffect(() => {
        setColor(colors[count % colors.length]);
    }, [count]);

    return (
        <div className="counter">
            <h1 style={{ color }}>{count}</h1>
            <button onClick={handleDecrease}>-</button>
            <button onClick={handleIncrease}>+</button>
        </div>
    );
};

export default Counter;
