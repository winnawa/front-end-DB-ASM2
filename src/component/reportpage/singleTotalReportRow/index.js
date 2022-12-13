



const SingleTotalReportComponent = (props)=>{


    if (props.prefix === "IP") {
        return(
            <div style={{display:"flex", fontSize:"large", paddingBottom:"10px"}}>
                <div style={{paddingLeft:"10px", width:"220px"}}>{props.obj.start_datetime}</div>
                <div style={{paddingLeft:"10px", width:"220px"}}>{props.obj.end_datetime}</div>
                <div style={{paddingLeft:"10px", width:"100px"}}>{props.obj.prefix}{props.obj.doctor_id}</div>
            </div>
        )
    }
    else {
        return(
            <div style={{display:"flex", fontSize:"large", paddingBottom:"10px"}}>
                <div style={{paddingLeft:"10px", width:"220px"}}>{props.obj.date_n_time}</div>
                <div style={{paddingLeft:"10px", width:"100px"}}>{props.obj.doctor_id}</div>
            </div>
        )
    }
    
}
export default SingleTotalReportComponent