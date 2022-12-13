



const SinglePatientComponent = (props)=>{


    return(
    
        <div style={{display:"flex", fontSize:"large", paddingBottom:"10px"}}>
            <div style={{paddingLeft:"10px", width:"180px"}}>{props.obj.full_name}</div>
            <div style={{paddingLeft:"10px", width:"100px"}}>{props.obj.prefix}{props.obj.n9_digit}</div>
        </div>
    
    )
}
export default SinglePatientComponent