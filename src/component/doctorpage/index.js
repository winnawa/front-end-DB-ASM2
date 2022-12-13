import SideBar from "../sidebar"
import MainBackGround from "../bigbackground"
import { useEffect, useState } from "react"
import axios from 'axios'
import SinglePatientInfo from "./singlePatientInfo.js"

const DoctorPageComponent = ()=>{

    const [currentPatient, updateCurrentPatient] = useState(0)
    const [contentInDoctorIdBox, updateContentInDoctorIdBox] = useState("Fill in user id")
    const [arrayOfPatients, updateArrayOfPatients] = useState([])
    const [arrayOfPatientsFiltered, updateArrayOfPatientsFiltered] = useState([])


    const searchPatientHandler = async ()=>{
        //console.log(contentInDoctorIdBox)
        const data = await axios.get(`http://0.0.0.0:3003/get_doctor_patients?doctor=${contentInDoctorIdBox}`)
        console.log(data)
        // patientsOfDoctor = data.data
        // console.log(patientsOfDoctor)
        updateCurrentPatient(0)
        updateArrayOfPatients(data.data)
        





        const arrayOfPatients = data.data
        let arrayOfPatientsFiltered =  data.data.map((element,index)=>{
            if (element.prefix==="IP"){return element}
            else{
                const arrayOfDiagnosis = []
                let flag= false
                    for (let i= index-1; i>=0;i--){
                        if (element.prefix === arrayOfPatients[i].prefix 
                            && element.n9_digit === arrayOfPatients[i].n9_digit
                            && element.date_n_time === arrayOfPatients[i].date_n_time    
                        ){
                            flag = true;
                            return                   
                        }
                    }
                if (!flag){
                    for (let i= index; i< arrayOfPatients.length; i++){
                        if (element.prefix === arrayOfPatients[i].prefix 
                            && element.n9_digit === arrayOfPatients[i].n9_digit
                            && element.date_n_time === arrayOfPatients[i].date_n_time    
                        ){
                           arrayOfDiagnosis.push(arrayOfPatients[i].diagnosis)                    
                        }
                    }
                    return(
                        {...element, arrayOfDiagnosis}      
                    )
                }
            }
        })

        while(!arrayOfPatientsFiltered[arrayOfPatientsFiltered.length-1]){
            arrayOfPatientsFiltered.pop()
        }
        updateArrayOfPatientsFiltered(arrayOfPatientsFiltered)
    }


   




    const backCurrentPatient = ()=>{
        if (currentPatient-1<0){
            updateCurrentPatient(arrayOfPatientsFiltered.length -1)
        }
        else {updateCurrentPatient(currentPatient-1)}
    }

    const nextCurrentPatient = ()=>{
        if (currentPatient+1 === arrayOfPatientsFiltered.length){
            updateCurrentPatient(0)
        }
        else {updateCurrentPatient(currentPatient+1)}
    }

    return(
        <div style={{display:"flex"}}>
            <SideBar></SideBar>
            <MainBackGround>
            
            <div style={{height:"100%",position:"relative",display:"flex", justifyContent:"space-evenly",alignItems:"center", flexDirection:"column"}}>
                <div style={{position:"relative",display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
            
                        <div style={{display:"flex"}}>
                            <input value={contentInDoctorIdBox} onChange={(e)=>{updateContentInDoctorIdBox(e.currentTarget.value)}} onFocus={()=>{updateContentInDoctorIdBox('')}} onBlur={()=>{if (contentInDoctorIdBox === ""){updateContentInDoctorIdBox("Fill in doctor id")}}} type="text" style={{fontSize:"x-large",borderRadius:"20px", width:"400px", height:"40px", paddingLeft:"10px"}}></input>
                            <button onClick={searchPatientHandler}  style={{borderRadius:"5px",width:"70px", height:"50px", marginLeft:"10px", backgroundColor:"dodgerblue"}}>Search</button>
                        </div>
                </div>

                <div style={{display:"flex", alignItems:"center"}}>
                    {(arrayOfPatients.length <= 0) ? (
                        <div></div>
                    )
                    :<button onClick={backCurrentPatient}  style={{borderRadius:"5px",width:"50px", height:"100px", backgroundColor:"dodgerblue"}}>Back</button>
                    }
                    

                    { (arrayOfPatients.length <= 0) ? (    
                        <div style={{ display:"flex",justifyContent:"center", alignItems:"center", width:"500px", height:"440px",fontSize:"x-large", backgroundColor:"orange", border:"solid", borderRadius:"10px"}}>            
                            <div>
                                No patient
                            </div>
                        </div>): 
                
                        <SinglePatientInfo number={currentPatient} totalNumber={arrayOfPatientsFiltered.length} obj={arrayOfPatientsFiltered[currentPatient]}/>
                    }
                    
                    {(arrayOfPatients.length <= 0) ? (
                        <div></div>
                    )
                    :<button onClick={nextCurrentPatient}  style={{borderRadius:"5px",width:"50px", height:"100px", backgroundColor:"dodgerblue"}}>Next</button>
                    }
                </div>


















            </div>




            </MainBackGround>
        </div>
    )
}

export default DoctorPageComponent