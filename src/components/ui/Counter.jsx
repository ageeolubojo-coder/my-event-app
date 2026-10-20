import React, { useState } from 'react'
import Button from './Button'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increaseHandler = () => {
        setCount(count + 1)
    }
    const decreaseHandler = () => {
        setCount(count - 1)
    }

    return (
        <div classname="flex justify-center items-center h-screen">
            <div>
                <h1 className="text-3xl font-bold mb-4">Counter</h1>
                <p classname="text-lg mb-4">Count: {count}</p>
                <Button onClick={increaseHandler}>Increase +++</Button>
                <Button onClick={decreaseHandler} className="ml-2">
                    Decrease ---
                </Button>
            </div>
        </div>
    )
}

export default Counter;