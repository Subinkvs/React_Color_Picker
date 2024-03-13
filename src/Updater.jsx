import React, {useState} from "react"

function Updater(){

    const [count, setCount] = useState(0);


    function Increament(){
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    function Decreament(){
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function Reset(){
        setCount(0);
    }


    return(
        <div>
        <h1>Count : {count}</h1>
        <button onClick={Increament}>Increament</button>
        <button onClick={Decreament}>Decreament</button>
        <button onClick={Reset}>Reset</button>
        </div>
    );


}

export default Updater