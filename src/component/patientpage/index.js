import SideBar from "../sidebar"
import MainBackGround from "../bigbackground"
import SinglePatientComponent from "./singlePatient"
import { useState } from "react"
import axios from "axios"
import SinglePatientInfo from "./singlePatientInfo.js"

const PatientPageComponent = ()=>{

    const [searchContent, updateSearchContent] = useState('')
    const [array, updateArray] = useState([])
    const [arrayOfAllTreatment_and_Exam, updateArrayOfAllTreatment_and_Exam] = useState([])
    const [currentPage, updateCurrentPage] = useState(0)

    const [searchById,updateSearchById] = useState(true)

    const backCurrentPatient = ()=>{
        if (currentPage-1<0){
            updateCurrentPage(arrayOfAllTreatment_and_Exam.length -1)
        }
        else {updateCurrentPage(currentPage-1)}
    }

    const nextCurrentPatient = ()=>{
        if (currentPage+1 === arrayOfAllTreatment_and_Exam.length){
            updateCurrentPage(0)
        }
        else {updateCurrentPage(currentPage+1)}
    }


    const patientChosenHandler = (obj)=>{
        const treatment_and_exam = array.filter((element)=>{
            return (element.prefix === obj.prefix && element.n9_digit=== obj.n9_digit)
        })
        updateArrayOfAllTreatment_and_Exam(treatment_and_exam)
    }

    const patientList = array.map((element, index)=>{
        if (index===0){
            return(
                <div key={index} onClick={()=>{patientChosenHandler(element)}}>
                    <SinglePatientComponent onClick={()=>{console.log('hi')}} key={index} obj={element}/>
                </div>
            )
        }
        else{
            let flag= false
            for (let i= 1; i<= index;i++){
                if (element.prefix === array[index-i].prefix && element.n9_digit === array[index-i].n9_digit){
            // console.log('name',element.full_name)
            // console.log('index',index)
            // console.log('prefix',element.prefix)
            // console.log('array index prefix',array[index-1].prefix)
                    flag = true;
                    break;                    
                }
            }
            if (!flag){
                return(
                    <div key={index} onClick={()=>{patientChosenHandler(element)}}>
                        <SinglePatientComponent key={index} obj={element}></SinglePatientComponent>
                    </div>
                )
            }
        }
    })

    const searchPatientHandler = async()=>{
        if (!searchById){
            const data = await axios.get(`http://0.0.0.0:3003/search?patient_name=${searchContent}&In patient=1&Out patient=1`)
            console.log(data.data)
            updateArray(data.data)
        }
        else{
            const data = await axios.get(`http://0.0.0.0:3003/search?patient_ID=${searchContent}`)
            console.log(data.data)
            updateArray(data.data)
        }
    }

    return(
        <div style={{display:"flex"}}>
            <SideBar></SideBar>
            <MainBackGround>
                
            <div style={{height:"100%",position:"relative",display:"flex", justifyContent:"space-evenly",alignItems:"center"}}>
                <div style={{position:"relative",display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
                        <div style={{display:"flex"}}>
                            <input value={searchContent} onChange={(e)=>{updateSearchContent(e.currentTarget.value)}} type="text" style={{borderRadius:"20px", width:"400px", height:"40px", paddingLeft:"10px", fontSize:"large"}}></input>
                            <button onClick={searchPatientHandler}  style={{borderRadius:"5px",width:"70px", height:"50px", marginLeft:"10px", backgroundColor:"dodgerblue"}}>Search</button>
                        </div>

                        <div style={{display:"flex"}}>
                            <div style={{display:"flex",borderRadius:"20px", paddingLeft:"10px" ,justifyContent:"space-evenly", width:"400px", height:"40px", backgroundColor:"orange"}}>
                                <div style={{display:"flex", alignItems:"center"}}>
                                    <input style={{width:"20px",height:"20px"}} checked={searchById} onClick={()=>{if (!searchById){updateSearchById(true)}}} type="checkbox"></input><label>Patient Id</label>
                                </div>
                                <div style={{display:"flex", alignItems:"center"}}>
                                    <input style={{width:"20px",height:"20px"}} checked={!searchById} onClick={()=>{if (searchById){updateSearchById(false)}}} type="checkbox"></input><label>Patient Name</label>
                                </div>
                            </div>
                            <div style={{width:"70px"}}></div>
                        </div>


                        <div style={{paddingTop:"20px"}}>
                            <div style={{backgroundColor:"orange", padding:"10px", borderRadius:"10px"}}>
                                {patientList}
                            </div>
                        </div>

                </div>
            
                    







                <div style={{display:"flex", alignItems:"center"}}>
                    {(arrayOfAllTreatment_and_Exam.length <= 0) ? (
                        <div></div>
                    )
                    :<button onClick={backCurrentPatient}  style={{borderRadius:"5px",width:"50px", height:"100px", backgroundColor:"dodgerblue"}}>Back</button>
                    }
                    

                    { (arrayOfAllTreatment_and_Exam.length <= 0) ? (    
                        <div style={{ display:"flex",justifyContent:"center", alignItems:"center", width:"500px", height:"440px",fontSize:"x-large", backgroundColor:"orange", border:"solid", borderRadius:"10px"}}>            
                            <div>
                                No patient
                            </div>
                        </div>): 
                
                        <SinglePatientInfo number={currentPage} totalNumber={arrayOfAllTreatment_and_Exam.length} obj={arrayOfAllTreatment_and_Exam[currentPage]}/>
                    }
                    
                    {(arrayOfAllTreatment_and_Exam.length <= 0) ? (
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

export default PatientPageComponent