import React,{useContext} from "react"
import { UserContext } from "./ComponentA"


function ComponentD(props){

const user = useContext(UserContext)

    return(
        <div className="box">
            <h2>ComponentD</h2>
            <p>{`Hello ${user}`}</p>
        </div>
    )
}

export default ComponentD