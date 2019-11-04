import React,{ useState, useEffect } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
function Pictures(props) {


    const [pictures, setPictures] = useState([])
    const [albumName, setAlbumName] = useState("")
    const albumId = props.match.params.albumId;
    console.log(albumId)

useEffect((e)=>{
     axios.get(`/albums/${albumId}?_embed=pictures`).then(resp => {
        console.log('resp', resp)
        setPictures(resp.data.pictures)
        setAlbumName(resp.data.name)
        console.log(pictures)
    });  
    // axios.get('http://localhost:3001/albums').then(resp => {
    //     setAlbumList(resp.data);
    // },)
}, [albumId])  

const [albumList, setAlbumList] = useState([])
useEffect((e)=>{
    axios.get('http://localhost:3001/albums').then(resp => {
        setAlbumList(resp.data);
    })
}, [])

// let filtered = data.Pictures.filter( e => {
//     return  e.albumId=== albumId
// })

  return (
  
    <div className="container">
    <h1 className="albumsHeader">{albumName}</h1>
    <div className="innerContainer">

        <div className="albumList">
            {albumList.map((e)=>(
                <Link key={e.id} to={`/Pictures/${e.id}`}>
                <div className="names" key={e.id}>{e.name}</div>
                </Link>
                )
            )}
        </div>
      <div className="albums">
          {pictures.map((e)=>(
              <div className="covers" key={e.id}>
              <div className="pictures">
                  <Link to={`/SinglePictures/${e.id}`}>
                  <img height="300px" width="300px"src={e.image}/>
                  </Link>
                  </div>
              <div className="albumName">{e.name}</div>
              </div>
           ))}
           <div className="goBack">
               <Link to={``}>
               Go Back To Home
               </Link>
               </div>
      </div>
  
      </div>
      
    </div>

  )
}

export default Pictures
