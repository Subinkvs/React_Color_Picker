import React, {useState, useEffect} from "react";

function NewComponent(){

const[count, setCount] = useState(0);
const[color, setColor] = useState("green")


useEffect(() =>{
    document.title = `${count} ${color}`
},[count, color]);

function addCount(){

    setCount(c => c + 1)
}

function subtractCount(){

    setCount(c => c - 1)
}

function ChangeColor(){

    setColor(c => c === "green" ? "red": "green")

}

return(
    <>
    <h2 style={{color: color}}>Count: {count}</h2>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Subtract</button>
    <button onClick={ChangeColor}>Change Color</button>
    </>
);

}

export default NewComponent