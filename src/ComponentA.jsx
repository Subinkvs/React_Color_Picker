import React, {useState} from "react"
import ComponentB from "./ComponentB"


function ComponentA(){

    const [user, setName] = useState("Subin")

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <p>{`Hello ${user}`}</p>
            <ComponentB user={user}/>
        </div>
    )

}

export default ComponentA