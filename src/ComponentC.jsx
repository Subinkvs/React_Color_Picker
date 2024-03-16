import { UserContext } from "./ComponentA"
import ComponentD from "./ComponentD"
import React, {useContext} from "react"

function ComponentC(){

    const value = useContext(UserContext)

    return(
        <div className="box">
            <h2>ComponentC</h2>
            <ComponentD/> 
            <p>{`Hello ${value}`}</p>
            </div>
    )
}

export default ComponentC