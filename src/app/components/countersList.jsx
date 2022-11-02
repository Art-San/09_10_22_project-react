import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        { id: 1, value: 0, name: "Ненужная вещь", price: 200 },
        { id: 2, value: 4, name: "Ложка" },
        { id: 3, value: 0, name: "Вилка" },
        { id: 4, value: 0, name: "Тарелка" },
        { id: 5, value: 0, name: "Набор минималиста" }
    ];

    const [counters, setCounters] = useState(initialState);
    const handeleDelete = (id) => {
        const newCounters = counters.filter((c) => c.id !== id);
        setCounters(newCounters);
    };

    const hendleReset = () => {
        // console.log('reset')
        setCounters(initialState);
    };

    const handleIncrement = (id) => {
        const elementIndex = counters.findIndex((c) => c.id === id);
        const newCounters = [...counters];
        newCounters[elementIndex].value++;
        setCounters(newCounters);
    };

    const handleDecrement = (id) => {
        const elementIndex = counters.findIndex((c) => c.id === id);
        const newCounters = [...counters];
        newCounters[elementIndex].value--;
        setCounters(newCounters);
    };

    return (
        <>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    onDelete={handeleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    {...count}
                />
            ))}
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={hendleReset}
            >
                Сброс
            </button>
        </>
    );
};

export default CountersList;
