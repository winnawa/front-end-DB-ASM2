import SideBar from "../sidebar"
import MainBackGround from "../bigbackground"
import { useState } from "react"
import axios from "axios"
import SingleTotalReportComponent from "./singleTotalReportRow"

const ReportComponent = ()=>{


    const [reportTotalFeeArray, updateReportTotalFeeArray]= useState([])
    const [reportSingleMedicationArray, updateReportSingleMedicationArray] = useState([])
    const [filteredReportSingleMedication, updateFilteredReportMedication] = useState([])


    const [searchContent, updateSearchContent] = useState('')
    const [prefix,updatePrefix] = useState('')
    const [totalMedFee, updateTotalMedFee] = useState(0)
    const [examinationFee, updateExaminationFee] = useState(0)



    const treatmentOrExamChosenHandler = (obj)=>{
        if (prefix==="IP"){
            const medicationArray = reportSingleMedicationArray.filter((element)=>{
                return (element.start_datetime === obj.start_datetime 
                        && element.end_datetime=== obj.end_datetime
                        && element.doctor_id === obj.doctor_id 
                        && element.inpatient_prefix === obj.inpatient_prefix
                        && element.inpatient_novem_digit === obj.inpatient_novem_digit
                        )
            })
            //console.log(obj)
            //console.log(medicationArray)
            updateExaminationFee(0)
            updateFilteredReportMedication(medicationArray)
            
        }
        else{
            const medicationArray = reportSingleMedicationArray.filter((element)=>{
                return (element.date_n_time === obj.date_n_time 
                        && element.doctor_id === obj.doctor_id 
                        && element.out_patient_prefix === obj.out_patient_prefix
                        && element.out_patient_novem_digit === obj.out_patient_novem_digit
                        )
            })
            //console.log(medicationArray)
            updateExaminationFee(obj.fee)
            updateFilteredReportMedication(medicationArray)
        }
        updateTotalMedFee(obj.total_med_fee)
    }

    const medicationFeeList = filteredReportSingleMedication.map((element, index)=>{
        return(
            <div key={index} style={{display:"flex", padding:"10px 0px", paddingLeft:"20px"}}>
                <div style={{width:"220px"}}>{element.med_name}</div>
                <div style={{width:"100px"}}>{element.price}</div>
                <div style={{width:"100px"}}>{element.prescribed_qnt}</div>
                <div style={{width:"120px"}}>{element.med_fee}</div>
            </div>
        )
    })





    const searchReport = async()=>{
        if (searchContent.length === 11){
            const prefix = searchContent[0] + searchContent[1];
            const nineDigit = searchContent[2] + searchContent[3] + searchContent[4] + searchContent[5] +searchContent[6] + searchContent[7] +searchContent[8] + searchContent[9] + searchContent[10]; 
            const data = await axios.get(`http://0.0.0.0:3003/payment?prefix=${prefix}&novem_digit=${nineDigit}`)
            console.log(data)
            updateReportSingleMedicationArray(data.data[0])
            updateReportTotalFeeArray(data.data[1])
            updatePrefix(searchContent[0] + searchContent[1])
        }
    }

    const totalReportList = reportTotalFeeArray.map((element, index)=>{
        return(
            <div key={index} onClick={()=>{treatmentOrExamChosenHandler(element)}}>
                <SingleTotalReportComponent obj={element} prefix={prefix}/>
            </div>
            
        )
    })

    const headerBarOP = (   <div style={{display:"flex", padding:"10px 0px"}}>
                                <div style={{width:"220px", borderRight:"solid", display:"flex", justifyContent:"center"}}>
                                    <div>DATE AND TIME</div>
                                </div>
                                <div style={{width:"100px", borderRight:"solid", display:"flex", justifyContent:"center"}}>
                                    <div>DOCTOR ID</div>
                                </div>
                            </div>)
     const headerBarIP = (   <div style={{display:"flex", padding:"10px 0px"}}>
                                <div style={{width:"220px", display:"flex", justifyContent:"center"}}>
                                    <div>START DATE</div>
                                </div>
                                <div style={{width:"220px", display:"flex", justifyContent:"center"}}>
                                    <div>END DATE</div>
                                </div>
                                <div style={{width:"100px", display:"flex", justifyContent:"center"}}>
                                    <div>DOCTOR ID</div>
                                </div>
                            </div>)



    return(    
        <div style={{display:"flex"}}>
        <SideBar></SideBar>
        <MainBackGround>
            
        <div style={{height:"100%",position:"relative",display:"flex", justifyContent:"space-evenly",alignItems:"center"}}>
            <div style={{position:"relative",display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
                    <div style={{display:"flex"}}>
                        <input value={searchContent} onChange={(e)=>{updateSearchContent(e.currentTarget.value)}} type="text" style={{borderRadius:"20px", width:"400px", height:"40px", paddingLeft:"10px", fontSize:"large"}}></input>
                        <button onClick={searchReport}  style={{borderRadius:"5px",width:"70px", height:"50px", marginLeft:"10px", backgroundColor:"dodgerblue"}}>Search</button>
                    </div>
                    <div style={{paddingTop:"20px"}}>
                        <div style={{backgroundColor:"orange", padding:"10px", borderRadius:"10px"}}>
                            { (prefix === "OP" && reportTotalFeeArray.length>0) ? headerBarOP:(<div></div>)}
                            { (prefix === "IP" && reportTotalFeeArray.length>0) ? headerBarIP:(<div></div>)}
                            {totalReportList}
                        </div>
                    </div>

            </div>





            <div style={{width:"80%", height:"400px",fontSize:"large", backgroundColor:"orange", border:"solid", borderRadius:"10px"}}>     
                    {/* { (arrayOfAllTreatment_and_Exam.length <= 0) ? (    
                        <div style={{ display:"flex",justifyContent:"center", alignItems:"center", width:"500px", height:"440px",fontSize:"x-large", backgroundColor:"orange", border:"solid", borderRadius:"10px"}}>            
                            <div>
                                No patient
                            </div>
                        </div>): 
                
                        <SinglePatientInfo totalNumber={arrayOfAllTreatment_and_Exam.length} obj={arrayOfAllTreatment_and_Exam[currentPage]}/>
                    } */}
                    <div>
                        <div style={{display:"flex", padding:"10px 0px", paddingLeft:"20px"}}>
                            <div style={{width:"220px"}}>Medication Name</div>
                            <div style={{width:"100px"}}>Price</div>
                            <div style={{width:"100px"}}>Quantity</div>
                            <div style={{width:"120px"}}>Total</div>
                        </div>
                        {medicationFeeList}
                        {filteredReportSingleMedication.length>0 && <div style={{position:"relative",padding:"10px 0px",width:"80px", left:"440px", borderTop:"solid"}}>{totalMedFee}</div>}
                        
                        {filteredReportSingleMedication.length>0 && examinationFee>0 && <div style={{display:"flex",position:"relative",padding:"10px 0px",width:"160px", left:"440px"}}>{examinationFee} <div style={{paddingLeft:"20px"}}>(Exam Fee)</div></div>}

                        {filteredReportSingleMedication.length>0 && examinationFee>0 && <div style={{display:"flex",position:"relative",padding:"10px 0px",width:"160px", left:"440px"}}>{parseFloat(examinationFee) + parseFloat(totalMedFee)} </div>}
                    </div>
            </div>









        </div>
        </MainBackGround>
    </div>
    )
}

export default ReportComponent