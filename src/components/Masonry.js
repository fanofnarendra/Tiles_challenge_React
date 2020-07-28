import React, { useState, useEffect } from 'react'

import {useHistory} from "react-router-dom"

import MasonryLayout from 'react-masonry-layout'
import {data} from "./data"
import Tile from "./Tile"

//import "./mansory.css"

let render = 0
let key
let reverse = 999


function Masonry(props) {

 // console.log(props.location.about)
 
 //During the time it must be reverse animated I pass thi prop into the tile
  if(props.location.about){
    reverse = props.location.about.reverse
  }

    const [state,setState] = useState({
        //perPage: 30,
        items: Array(30).fill(),
        gotofullscreen:false,
       
      })

      //everytime the first animations are done I render a dummy screen. so original screen + dummy screen and then go to full screen
      const gothere1 = () => {
        render++
        if (render % 2 == 0)
        history.push(`/open/${key}`)
      }

      const history = useHistory()

      useEffect(() => {gothere1()},[state.gotofullscreen])

      

      
      const getkey = (i) => {
        key = i
      }
    // number of columns depending on screen
      const size = [ { mq: '260px', columns: 1, gutter: 20 },{ mq: '460px', columns: 2, gutter: 20 }, { mq: '660px', columns: 3, gutter: 20 }, { mq: '880px', columns: 5, gutter: 20 },{ mq: '1100px', columns: 6, gutter: 20 } ]
      // to get the key of whom must be displayed in screen
      const gothere = (i) => {
        getkey(i)
        setState({gotofullscreen:true})
      }

     
      
      let layout = state.gotofullscreen?"Hello":<div >
          
      <MasonryLayout
         id="masonry-layout"
         sizes = {size}
         style = {{margin:"10px"}}
         
         >
         {state.items.map((v, i) => {
           return (
            
             <Tile key = {i} id = {i} gothere = {gothere} reverse = {reverse}/>
            
           )}
         )}

       </MasonryLayout>
 </div>

      
    return (
      <div>
        {layout}
        

      </div>
        
    )
}

export default Masonry
