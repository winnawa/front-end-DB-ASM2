

const SinglePatientInfo =  (props)=>{


    return(
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly", width:"100%"}}>
                <div style={{width:"100%", height:"500px",fontSize:"x-large", backgroundColor:"orange", border:"solid", borderRadius:"10px"}}>            
                    <div style={{display:"flex"}}>
                        <div style={{ fontSize:"x-large", paddingBottom:"15px", paddingLeft:"10px"}}>Treatment/Examination Information</div>
                        <div style={{paddingLeft:"100px"}}>{props.number+1}/{props.totalNumber} </div>
                    </div>

                    {/* <div style={{display : "flex", flexDirection : "column"}}>
                        <label style={{paddingBottom:"5px"}}>Name:</label>
                        <input value={props.fname} type="text" style={{height:"30px", borderRadius:"5px", paddingLeft:"5px",width:"150px"}}></input>
                    </div> */}

                    <div style={{display : "flex", padding:"10px 0px"}}>
                        <div style={{display : "flex"}}>
                            <div style={{width:"120px"}}>Full Name</div>
                            <div style={{paddingRight:"20px"}}>:</div> 
                            <div style={{width:"200px"}}>{props.obj.full_name}</div>
                        </div>
                    </div>


                    <div style={{display : "flex",  padding:"10px 0px"}}>
                            <div style={{width:"200px"}}>Phone Number</div>
                            <div style={{paddingRight:"20px"}}>:</div>
                            <div>{props.obj.phone}</div>
                    </div>

                {   props.obj.prefix==="IP" ?

                    (<div style={{display : "flex",  padding:"10px 0px"}}>
                            <div style={{width:"200px"}}>Sickroom</div>
                            <div style={{paddingRight:"20px"}}>:</div>
                            <div>{props.obj.sickroom}</div>
                    </div>)
                    :(<div></div>)
                }



                    <div style={{display : "flex",  padding:"10px 0px"}}>
                            <div style={{width:"230px"}}>Fee</div>
                            <div style={{paddingRight:"20px"}}>:</div>
                            <div>{props.obj.fee}</div>
                    </div>
                    <div style={{display : "flex",  padding:"10px 0px"}}>
                            <div style={{width:"230px"}}>Doctor Id</div>
                            <div style={{paddingRight:"20px"}}>:</div>
                            <div>{props.obj.doctor_id}</div>
                    </div>
                    
                    {   props.obj.prefix==="IP" ? 
                        (<div style={{display : "flex", padding:"10px 0px"}}>
                            <div style={{width:"230px"}}>Day of Admission</div>
                            <div style={{paddingRight:"20px"}}>:</div>
                            <div>{props.obj.doa}</div>
                        </div>)
                        :
                        (<div>
                        </div>)
                    }
                    <div style={{display : "flex", padding:"10px 0px"}}>
                        <div style={{width:"230px"}}>Patient Code</div>
                        <div style={{paddingRight:"20px"}}>:</div>
                        <div>{props.obj.prefix}{props.obj.n9_digit}</div>
                    </div>
                    
                    {   props.obj.prefix==="IP" ? 
                        (<div style={{display : "flex",  padding:"10px 0px"}}>
                            <div style={{width:"230px"}}>Start Date of Treatment</div> 
                            <div style={{padding:"0px 5px"}}>:</div>
                            <div>{props.obj.start_datetime}</div>
                        </div>)
                        :
                        (<div style={{display : "flex",  padding:"10px 0px"}}>
                            <div style={{width:"230px"}}>Date of Examination</div> 
                            <div style={{padding:"0px 5px"}}>:</div>
                            <div>{props.obj.date_n_time}</div>
                        </div>)
                    } 

                    {   props.obj.prefix==="IP" ? 
                        (<div style={{display : "flex",  padding:"10px 0px"}}>
                            <div style={{width:"230px"}}>End Date of Treatment</div> 
                            <div style={{padding:"0px 5px"}}>:</div>
                            <div>{props.obj.end_datetime}</div>
                        </div>)
                        :
                        (<div style={{display : "flex",  padding:"10px 0px"}}>
                            <div style={{width:"230px"}}>Next Examination Date</div> 
                            <div style={{padding:"0px 5px"}}>:</div>
                            <div>{props.obj.nxt_exam_dt ? props.obj.nxt_exam_dt : "N/A"}</div>
                        </div>)
                    }

                </div>
        </div>
    )
}

export default SinglePatientInfo