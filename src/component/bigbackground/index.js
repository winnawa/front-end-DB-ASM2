

const MainBackGround = (props)=>{

    return(
        <div style={{width:"calc(100% - 200px)", display:"flex", justifyContent:"center", }}>
           
            <div style={{backgroundImage:"url(https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                        margin: "10px",height:"600px", width:"100%", marginTop:"0px"            
            }}>
                {props.children}
            </div>
            
        </div>
    )
}

export default MainBackGround