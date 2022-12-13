import { useState } from "react";
import DoctorPageComponent from "./component/doctorpage";
import HomePageComponent from "./component/homepage";
import PatientPageComponent from "./component/patientpage";
import SideBar from "./component/sidebar";
import { usePageContext } from "./context/usePageContext";
import ReportComponent from "./component/reportpage";
function App() {
  
  const {pageNumber} = usePageContext()

  if (pageNumber ===0) {
    return (
        <HomePageComponent/>
    )
  }
  else if (pageNumber ===1){
    return (      
        <PatientPageComponent/>
    )
  }
  else if (pageNumber ===2){
    return (
      <div >
        <DoctorPageComponent/>
      </div>
    )
  }
  else {
    return (
      <div >
        <ReportComponent/>
      </div>
    )
  }



}

export default App;
