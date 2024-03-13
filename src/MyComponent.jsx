import React, {useState} from "react";

function MyComponent(){

    const [car, setCar] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    
function handleAddCar(){

    const newCar = { year : carYear,
                     make : carMake,
                     model : carModel
                    };

    setCar(c => [...c, newCar]);

}

function handleRemoveCar(index){

    setCar(car.filter((_, i) => i!==index))

}

function handleChangeYear(event){
    setCarYear(event.target.value)

}

function handleChangeMake(event){
    setCarMake(event.target.value)

}

function handleChangeModel(event){
    setCarModel(event.target.value)


}

return(
    <div>
        <h2>List of cars:</h2>
        <ul>
            {car.map((car, index) => 
            <li key={index} onClick={() => handleRemoveCar(index)}>
                {car.year} {car.make} {car.model}
             </li> )}
        </ul>
        <input type="number" value={carYear}  onChange={handleChangeYear}/>
        <br />
        <input type="text" value={carMake} onChange={handleChangeMake} />
        <br />
        <input type="text" value={carModel} onChange={handleChangeModel} />
        <button onClick={handleAddCar}>Add</button>
    </div>
)

}


export default MyComponent