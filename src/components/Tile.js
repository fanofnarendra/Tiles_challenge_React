import React, { useState, useEffect } from 'react'
import "./Tile.css"
import {data} from "./data"

import { useHistory } from "react-router-dom";




function Tile(props) {
  let times = 0

 // console.log(props.id+props.reverse)

  let bool = false

  const history = useHistory();

  const [state,setState] = useState({
        
    classNames: "",
    displayTile:true

    
  })
  //if you need to reverse the animation
  useEffect(()=>{
    setInterval(()=>{if(props.reverse == props.id && times == 0 ){
      times++
      //console.log(times+props.id)
      setState({classNames:"animationreverse"})
    }
    },1)
  },[])

    
      const start = () => {
        setState({classNames:"animation"})
        
        //{console.log(window.innerHeight,window.innerWidth)}
        //    {console.log(props.id)}
      };

      onanimationend = () => {
        if(state.classNames == "animation"){
        setState({classNames:"",displayTile:false})
        props.gothere(props.id)
        }
        else{
          setState({classNames:""})
        }
      }



      
 //}
      
      let elem = document.querySelector('div');
    
    return (
        <React.Fragment>

            
                <div
                    
                    className= {state.classNames}
                    
                    onClick = {start}
                    
                      key={props.id}
                      style={{
                        width: '200px',
                        height: `${data[props.id].height}px`,
                        lineHeight: `${data[props.id].height}px`,
                        color: 'white',
                        fontSize: '32px',
                        display: 'block',
                        background: 'rgba(0,0,0,0.7)',
                        backgroundColor: `#${data[props.id].color}`,
                        opacity:"0.85",
                        zIndex:"0",
                      }}>
                      {props.id}
                    </div>
            
        </React.Fragment>
    )
}

export default Tile
