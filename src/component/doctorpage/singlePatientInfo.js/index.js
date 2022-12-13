

const SinglePatientInfo =  (props)=>{


    return(
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly", width:"100%"}}>
                <div style={{width:"100%", height:"440px",fontSize:"x-large", backgroundColor:"orange", border:"solid", borderRadius:"10px"}}>            
                    <div style={{display:"flex"}}>
                        <div style={{ fontSize:"x-large", paddingBottom:"15px", paddingLeft:"10px"}}>Patient Information</div>
                        <div style={{paddingLeft:"100px"}}>{props.number+1}/{props.totalNumber} </div>
                    </div>

                    {/* <div style={{display : "flex", flexDirection : "column"}}>
                        <label style={{paddingBottom:"5px"}}>Name:</label>
                        <input value={props.fname} type="text" style={{height:"30px", borderRadius:"5px", paddingLeft:"5px",width:"150px"}}></input>
                    </div> */}

                    <div style={{display : "flex", padding:"10px 0px"}}>
                        <div style={{display : "flex"}}>
                            <div style={{width:"120px"}}>First Name</div>
                            <div style={{paddingRight:"20px"}}>:</div> 
                            <div style={{width:"100px"}}>{props.obj.fname}</div>
                        </div>
                        <div style={{display : "flex"}}>
                            <div style={{width:"120px"}}>Last Name</div> 
                            <div style={{paddingRight:"20px"}}>:</div> 
                            <div>{props.obj.lname}</div>
                        </div>
                    </div>


                    <div style={{display : "flex", padding:"10px 0px"}}>
                        <div style={{display : "flex"}}>
                            <div style={{width:"120px"}}>Gender</div> 
                            <div style={{paddingRight:"20px"}}>:</div>
                            <div style={{width:"100px"}}>{props.obj.gender}</div>
                        </div>
                        <div style={{display : "flex"}}>
                            <div style={{width:"120px"}}>Birth</div> 
                            <div style={{paddingRight:"20px"}}>:</div> 
                            <div>{props.obj.dob}</div>
                        </div>
                    </div>

                    <div style={{display : "flex",  padding:"10px 0px"}}>
                            <div style={{width:"200px"}}>Phone Number</div>
                            <div style={{paddingRight:"20px"}}>:</div>
                            <div>{props.obj.phone}</div>
                    </div>

                    <div style={{display : "flex",  padding:"10px 0px"}}>
                            <div style={{width:"200px"}}>Address</div>
                            <div style={{paddingRight:"20px"}}>:</div>
                            <div>{props.obj.address}</div>
                    </div>
                    
                    {   props.obj.prefix==="IP" ? 
                        (<div style={{display : "flex", padding:"10px 0px"}}>
                            <div style={{width:"200px"}}>Day of Admission</div>
                            <div style={{paddingRight:"20px"}}>:</div>
                            <div>{props.obj.doa}</div>
                        </div>)
                        :
                        (<div style={{display : "flex", padding:"10px 0px"}}>
                            <div style={{width:"200px"}}>Diagnosis</div>
                            <div style={{paddingRight:"20px"}}>:</div>
                            <div>{props.obj.arrayOfDiagnosis.map((element,index)=>(<div key={index}>{element}</div>)) }</div>
                        </div>)
                    }
                    <div style={{display : "flex", padding:"10px 0px"}}>
                        <div style={{width:"200px"}}>Patient Code</div>
                        <div style={{paddingRight:"20px"}}>:</div>
                        <div>{props.obj.prefix}{props.obj.n9_digit}</div>
                    </div>
    
                    {   props.obj.prefix==="IP" ? 
                        (<div style={{display : "flex",  padding:"10px 0px"}}>
                            <div style={{width:"226px"}}>Start Date of Treatment</div> 
                            <div style={{padding:"0px 5px"}}>:</div>
                            <div>{props.obj.start_dt}</div>
                        </div>)
                        :
                        (<div style={{display : "flex",  padding:"10px 0px"}}>
                            <div style={{width:"226px"}}>Date of Treatment</div> 
                            <div style={{padding:"0px 5px"}}>:</div>
                            <div>{props.obj.date_n_time}</div>
                        </div>)
                    } 

                    {   props.obj.prefix==="IP" ? 
                        (<div style={{display : "flex",  padding:"10px 0px"}}>
                            <div style={{width:"226px"}}>End Date of Treatment</div> 
                            <div style={{padding:"0px 5px"}}>:</div>
                            <div>{props.obj.end_dt}</div>
                        </div>)
                        :
                        (<div style={{display : "flex",  padding:"10px 0px"}}>
                            <div style={{width:"228px"}}>Next Date of Treatment</div> 
                            <div style={{padding:"0px 5px"}}>:</div>
                            <div>{props.obj.nxt_exam_dt ? props.obj.nxt_exam_dt : "N/A"}</div>
                        </div>)
                    }

                </div>
        </div>
    )
}

export default SinglePatientInfo