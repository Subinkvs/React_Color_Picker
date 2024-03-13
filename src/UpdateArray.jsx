import React, {useState} from "react";

function UpdateArray(){

    const [Food, setFood] = useState(["Apple", "Orange", "Mango"])


    function handleAddFood(){
        const newFood = document.getElementById("food-input").value; 
        document.getElementById("food-input").value = "";
        setFood (f => [...f, newFood]);
    }

    function handleRemoveFood(index){
        setFood(Food.filter((_, i) => i!==index))

    }

    return(
        <div>
            <h2>List of foods:</h2>
            <ul>
                {Food.map((food, index) => 
                 <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li> )} 
            </ul>
            <input type="text" id="food-input" placeholder="Enter your food"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )

}

export default UpdateArray