import React, {useState, useEffect, } from "react";

function SizeComponent(){

    const [width, setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerHeight)
    
    useEffect(() =>{
        window.addEventListener("resize", handleSize);
        console.log("Event Listener added");
    }, []);

    useEffect(() =>{
        document.title = `Size ${width} * ${height}`
    }, [width,height])

    function handleSize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(<>
    <h2>Width :{width}:px</h2>
    <h2>Height:{height}:px</h2>
    </>);

}




export default SizeComponent