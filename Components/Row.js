import React from "react"

export default function Row(props){
    return(
        <>
        <div className="rowContainer">
            <img className="poster" src={`images/${props.item.imageSrc}`} />
            <div className="textContainer">
                <h2 className="title">{props.item.title}</h2>
                <p className="movieSummary"> {props.item.summary} </p>
            </div>
        </div>
        <hr />
        </>
    )
}