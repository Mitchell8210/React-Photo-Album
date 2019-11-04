import React, { useState, useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

function Albums(props) {
    
const [data, setData] = useState([])
const [albumId, setAlbumId] = useState("")

useEffect((e)=>{
     axios("http://localhost:3001/albums").then(resp => {
        setData(resp.data)
    });  
}, [])

// function handleClick(e){
//     e.preventDefault();
//     props.match.history.push("/Pictures" + albumId)
// }

  return (

<div className="container">
  <h1 className="albumsHeader">My Albums</h1>


    <div className="albums">
        {data.map((e)=>(
            <Link key={e.id} to={"/Pictures/"+ e.id}>
            <div className="covers">
            <div className="albumCover"><img width="300px"src={e.coverPhoto}/></div>
            <div className="albumName">{e.name}</div>
            </div>
            </Link>
         ))}
         <Link to={"/Form"}>
                <div className="formLink">Add a picture to the Collection</div>
            </Link>
    </div>
            


  </div>
  )
}

export default Albums
