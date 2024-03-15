import ComponentD from "./ComponentD"

function ComponentC(props){

    return(
        <div className="box">
            <h2>ComponentC</h2>
            <ComponentD user={props.user}/> 
            </div>
    )
}

export default ComponentC