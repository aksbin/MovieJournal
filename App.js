import React from "react"
import ReactDOM from "react-dom"
import Row from "./Components/Row"
import Header from "./Components/Header"
import movData from "./data"




export default function App(){
    
    const rowData = movData.map(item => {
        return(
            <Row 
            item={item}
            />
        )
    })
    
    return(
        <>
        <Header />
        <div className="rowList">
            {rowData}
        </div>
        </>
    )
}