
import React,{ useState, useEffect } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import validator from 'validator'


function Form(props) {

    const [addImage, setAddImage] = useState([])
    const image = {
        image: ""
    }
// useEffect((e)=>{
//     axios.post("http://localhost:3001/pictures").then(resp => {
//        setAddImage(resp.data)
//    });  
// }, [])


function handleSubmit(e){
    e.preventDefault()

}
function handleChange(e){
    // e = {
    //     id: "",
    //     image: e.target.value,
    //     name=""
    // }
}

    return (
        <div className="formContainer">
        <div>hello World, Bitches</div>
        <form onSubmit={handleSubmit}>
            <h1 className="formTitle">Add an Image to the collection</h1>
            <label htmlFor="image"></label>
            <input onChange={handleChange} name="image" required type="text" placeholder="Place image url here"></input>
            <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
        <Link to="/">
            <div className="homeLink">Back to Home</div>
        </Link>
        </div>
    )

}


export default Form