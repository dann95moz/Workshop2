import React, { useState } from "react";




export const Counter = () => {
    // Counter is a state initialized to 0
    const [counter, setCounter] = useState(10)

    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
        // Counter state is incremented
        setCounter(counter + 1)


    }

    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
        // Counter state is decremented
        setCounter(counter - 1)
    }

    return (

        <div style={{

            color: "white",
        }}>


            <div style={{
                position: "absolute",
                right: "0px",
                marginTop: "-10%"

            }}>
                {counter}
            </div>
            <div className="buttons">
                <button style={{
                    fontSize: '60%',
                    position: "absolute",
                    right: "20px",
                    backgroundColor: 'green',
                    borderRadius: '20px',
                    color: 'white',
                    border: "none",
                    marginTop: "-10%"

                }}
                    onClick={handleClick1}>+</button>
                <button style={{
                    fontSize: '60%',
                    position: "absolute",
                    right: "40px",
                    backgroundColor: 'red',
                    borderRadius: '20px',
                    border: "none",
                    color: 'white',
                    marginTop: "-10%",

                }}
                    onClick={handleClick2}>-</button>
            </div>
        </div>
    )
}

export default Counter
