import React from 'react'
import { Link } from 'react-router-dom'
import {data} from "./data"

//Data displayed here in full screen

function open(props) {
    
    //I pass the id of the element to be displayed in full screen and pass the same ele back
    return (
        <Link to ={{ pathname: "/", about:{reverse:props.match.params.id}}}>

<div style = {{backgroundColor: `#${data[props.match.params.id].color}`,width:"100vw",height:"100vh"}}>
            {props.match.params.id}
        </div>

        </Link>
       
    )
}

export default open
