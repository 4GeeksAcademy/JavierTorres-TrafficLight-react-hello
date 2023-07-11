import React, { useEffect, useRef, useState } from "react"


const TrafficLight = () => {

    const [color, setColor] = useState('');
    const [colorRedSelected, setcolorRedSelected] = useState('');
    const [colorYellowSelected, setcolorYellowSelected] = useState('');
    const [colorGreenSelected, setcolorGreenSelected] = useState('');
    const [disableChange, setDisableChange] = useState(false)
    const [disableStop, setDisableStop] = useState(true)
  

    const [hidden, setHidden] = useState(true)
    const interval = useRef(null);

    let colorIndex = 0


    const colorSelected = () => {

        if (color == "red") {
            setcolorRedSelected("selected")
            setcolorYellowSelected("")
            setcolorGreenSelected("")
           

        }
        if (color == "yellow") {
            setcolorYellowSelected("selected")
            setcolorRedSelected("")
            setcolorGreenSelected("")
           

        }
        if (color == "green") {
            setcolorGreenSelected("selected")
            setcolorRedSelected("")
            setcolorYellowSelected("")
           

        }

    }

    const handleStart = () => {

        setcolorRedSelected("")
        setcolorYellowSelected("")
        setcolorGreenSelected("")
        setColor("")

        setDisableChange(true)
        setDisableStop(false)
       

        interval.current = setInterval(() => {

            if (hidden == false) {

                const colors = ["red", "yellow", "green"]

                const colorTurnOn = colors[colorIndex]

                if (colorTurnOn === "red") {
                    setcolorRedSelected("selected")
                    setcolorYellowSelected("")
                    setcolorGreenSelected("")
                   
                }
                if (colorTurnOn === "yellow") {
                    setcolorYellowSelected("selected")
                    setcolorRedSelected("")
                    setcolorGreenSelected("")
                   
                }
                if (colorTurnOn === "green") {
                    setcolorGreenSelected("selected")
                    setcolorRedSelected("")
                    setcolorYellowSelected("")
                  
                }
      

                colorIndex < 3 ? colorIndex++ : colorIndex = 0

            }
            else {

                const colors = ["red", "yellow", "green"]
                const colorTurnOn = colors[colorIndex]

                if (colorTurnOn === "red") {
                    setcolorRedSelected("selected")
                    setcolorYellowSelected("")
                    setcolorGreenSelected("")
                  
                }
                if (colorTurnOn === "yellow") {
                    setcolorYellowSelected("selected")
                    setcolorRedSelected("")
                    setcolorGreenSelected("")

                }
                if (colorTurnOn === "green") {
                    setcolorGreenSelected("selected")
                    setcolorRedSelected("")
                    setcolorYellowSelected("")
                    
                }

                colorIndex < 2 ? colorIndex++ : colorIndex = 0
            }

        }, 500);
        return () => {
            clearInterval(interval.current)
        }
    }

    const handleReset = () => {

        clearInterval(interval.current)
        setcolorGreenSelected("")
        setcolorRedSelected("")
        setcolorYellowSelected("")
      

        if (hidden == true) {

            setDisableChange(false)
            setDisableStop(true)
          
        } else {

            setDisableChange(false)
            setDisableStop(true)
           
        }

    }


    

    useEffect(() => {
        colorSelected();
    })

    return (
        <div>
            <div id="traffic-top"></div>
            <div id="container">
                <div className={"red light " + colorRedSelected} onClick={() => setColor("red")}></div>
                <div className={"yellow light " + colorYellowSelected} onClick={() => setColor("yellow")}></div>
                <div className={"green light " + colorGreenSelected} onClick={() => setColor("green")}></div>
            </div>

            <div className="container-fluid">
                <button className="btn btn-lg shadow-lg" disabled={disableChange} onClick={() => handleStart()}>Change Color</button>
                <button className="btn btn-lg shadow-lg" disabled={disableStop} onClick={() => handleReset()}>Stop Change Color</button>
            </div>
        </div>
    )
}

export default TrafficLight