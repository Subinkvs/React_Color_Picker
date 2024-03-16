import React, {useState, useEffect, useRef} from "react"

function Reference(){

    const inputref1 = useRef(null);
    const inputref2 = useRef(null);
    const inputref3 = useRef(null);


    useEffect(() =>{
        console.log("COMPONENT RENDERED");
    })

    function handleClick1(){
        inputref1.current.focus()
        inputref1.current.style.backgroundColor = "Blue"
        inputref2.current.style.backgroundColor = ""
        inputref3.current.style.backgroundColor = ""

    }

    
    function handleClick2(){
        inputref2.current.focus()
        inputref2.current.style.backgroundColor = "Blue"
        inputref1.current.style.backgroundColor = ""
        inputref3.current.style.backgroundColor = ""

    }

    function handleClick3(){
        inputref3.current.focus()
        inputref3.current.style.backgroundColor = "Blue"
        inputref1.current.style.backgroundColor = ""
        inputref2.current.style.backgroundColor = ""

    }
     return(
        <div>
            <button onClick={handleClick1}>Click Me!</button>
            <input type="text" ref={inputref1}/>
            <br />
            <button onClick={handleClick2}>Click Me!</button>
            <input type="text" ref={inputref2}/>
            <br />
            <button onClick={handleClick3}>Click Me!</button>
            <input type="text" ref={inputref3}/>
        </div>
    )


}

export default Reference