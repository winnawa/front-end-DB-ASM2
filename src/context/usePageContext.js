import { createContext, useContext } from "react"
import { useState } from 'react'

const tempFunctionForNum =()=>{}
const PageContext = createContext({
                                        pageNumber : 0,
                                        updatePageNumber : tempFunctionForNum,
                                    })
export const usePageContext = ()=>useContext(PageContext)


const PageContextComponent = (props)=>{
    const [pageNumber, updatePageNumber] = useState(0)

    return(
        <PageContext.Provider value={{pageNumber, updatePageNumber}}>
            {props.children}
        </PageContext.Provider>
    )
}
export default PageContextComponent