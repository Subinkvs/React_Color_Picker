import React, {useState, createContext} from "react"
import ComponentB from "./ComponentB"

export const UserContext = createContext();


function ComponentA(){

    const [user, setName] = useState("Subin")

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <p>{`Hello ${user}`}</p>
            <UserContext.Provider value={user}>
            <ComponentB user={user}/> 
            </UserContext.Provider>
          
        </div>
    )

}

export default ComponentA