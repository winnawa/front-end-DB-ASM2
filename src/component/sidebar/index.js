import { usePageContext } from "../../context/usePageContext"
import SingleBarComponent from "./singlebar"


const array = [
    {
        content : "Home Page",
        iconURL:"https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
    },
    {
        content: "Patient",
        iconURL:"https://cdn-icons-png.flaticon.com/512/1430/1430402.png"
    }
    ,{
        content: "Doctor",
        iconURL : "https://cdn-icons-png.flaticon.com/512/920/920988.png"
    },
    {
        content:"Report",
        iconURL : "https://cdn-icons-png.flaticon.com/512/90/90417.png"
    }
]

const SideBar = ()=>{


    

    const arrayRender = array.map((element,index)=>{
        return(
            <SingleBarComponent key={index} iconURL={element.iconURL} content={element.content} index={index}/>
        )
    })

    return(
        // <div style={{backgroundColor : "black", display:"flex", flexDirection:"column"}}>
        <div style={{backgroundColor : "orange", height:"600px", width:"200px"}}>
            <div style={{padding:"15px 0px"}}>
            <div style={{display:"flex", justifyContent:"center",border:"solid"}}>
                <div style={{padding:"15px"}}>
                    <div>USER</div>
                </div>
            </div>
            </div>
            {arrayRender}
        </div>
    )
}

export default SideBar