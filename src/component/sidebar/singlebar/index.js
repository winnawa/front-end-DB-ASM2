import { useState } from "react"
import { Border } from "./styled.ts"

import { usePageContext } from "../../../context/usePageContext"

const SingleBarComponent = (props)=>{

    const {updatePageNumber} = usePageContext()

    return(
        <Border>
        <div onClick={()=>{console.log(props.index);updatePageNumber(props.index)}}>
        <div style={{display : "flex", padding:"10px 0px", cursor:"pointer", paddingLeft:"10px"}}>
        <div style={{backgroundImage: 
           `url(${
               props.iconURL
           })`
            , width:"50px", height:"50px",backgroundSize:"cover"}}></div>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div style={{paddingLeft:"10px", fontSize:"large", width:"95px"}}>{props.content}</div>
        </div>
        </div>
        </div>
        </Border>
    )

}
export default SingleBarComponent