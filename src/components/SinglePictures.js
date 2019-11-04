import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function SinglePicures(props){

const [image, setImage] = useState([])
const [imageName, setImageName] = useState("")
const id = props.match.params.id
const [albumId, setAlbumId] = useState("")

useEffect((e) => {
    axios.get(`/pictures/${id}`).then(resp =>{
        setImage(resp.data)
        setImageName(resp.data.name)
        setAlbumId(resp.data.albumId)

    })
   
}, [id, albumId])


// const [pictures, setPictures] = useState([])
// const [pictureName, setPictureName] = useState("")
// const [singlePicture, setSinglePicture] = useState([])
// const [pictureId, setPictureId] = useState([])
// const [ lastPicture ,setLastPicture] = useState([])

// useEffect((e)=>{
//     axios.get(`/albums/${albumId}?_embed=pictures`).then(resp => {
//        console.log('resp', resp.data.pictures)
//        setPictures(resp.data.pictures)
//        setPictureId(resp.data[0].albumId)
//     //    setPictureName(resp.data.pictures[0].name)
//     //    setSinglePicture(resp.data.pictures[0])
//     //    setLastPicture(resp.data.pictures[pictures.length - 1])
//     //    console.log("pics"+pictures)
//    });  

// }, [albumId]) 

// console.log("album id="+pictureId)

function next(album){

    if(album >= 1 && album <=6){
        if(album < 6){
            album += 1
        } else if(album ===6){
            album = 1
        }      
        }
    if(album >=7 && album <= 12){
        if(album < 12){
            album += 1
        } else if(album === 12){
            album = 7
        }
    }
    if(album >= 13 && album <= 18){
        if(album < 18){
            album +=1
        } else if( album === 18){
            album = 13
        }
    }
    if(album >= 19 && album <= 24){
        if(album < 24){
            album += 1
        } else if(album === 24){
            album = 19
        }
    }
    if(album >= 25 && album <= 30){
        if(album < 30){
            album += 1
        } else if(album === 30){
            album = 25
        }
    }
    if(album >= 31 && album <= 36){
        if(album <36){
            album += 1
        } else if(album === 36){
            album = 31
        }
    }
    return album
    }
console.log(next(1))

function previous(album){
    if(album >= 1 && album <=6){
        if(album > 1){
            album -= 1
        } else if(album ===1){
            album = 6
        }      
        }
    if(album >=7 && album <= 12){
        if(album > 7){
            album -= 1
        } else if(album === 7){
            album = 12
        }
    }
    if(album >= 13 && album <= 18){
        if(album > 13){
            album -=1
        } else if( album === 13){
            album = 18
        }
    }
    if(album >= 19 && album <= 24){
        if(album > 19){
            album -= 1
        } else if(album === 19){
            album = 24
        }
    }
    if(album >= 25 && album <= 30){
        if(album > 25){
            album -= 1
        } else if(album === 25){
            album = 30
        }
    }
    if(album >= 31 && album <= 36){
        if(album > 31){
            album -= 1
        } else if(album === 31){
            album = 36
        }
    }
    return album
    }



    return (
        <div className="singleDisplayContainer">
            
       
            <div className="singleDisplay" key={image.id}>
           <Link to={`/SinglePictures/${previous(image.id)}`}>
               <div className="previousImage">Previous Image</div>
           </Link>
           <div className="singlePicture">
               <div className="imageTitle">{image.name}</div>
               <img src={image.image} height="600px"/></div>
           <Link to={`/SinglePictures/${next(image.id)}`}>
               <div className="nextImage">Next Image</div>
           </Link>
           </div>
           <div className="backButtons">
           <div className="goBack">
               <Link to={`/pictures/${albumId}/Welcome-Back`}>
               Albums
               </Link>
               </div>
               <div className="goBack">
               <Link to={``}>
               Home
               </Link>
               </div>
               </div>
           {/* <div className="singleDisplay" key={singlePicture.id}>
           <Link to={`/SinglePictures/${singlePicture.id-1}`}>
               <div className="previousImage">Previous Image</div>
           </Link>
           <div className="singlePicture">
               <div className="imageTitle">{singlePicture.name}</div>
               <img src={singlePicture} height="600px"/></div>
           <Link to={`/SinglePictures/${singlePicture.id+1}`}>
               <div className="nextImage">Next Image</div>
           </Link>
           </div>
           <div className="goBack">
               <Link to={`/pictures/${albumId}/Welcome-Back`}>
               Go Back To Albums
               </Link>
               </div>
               <div className="goBack">
               <Link to={``}>
               Go Back To Home
               </Link>
               </div> */}
            
       </div>
    )
}

export default SinglePicures