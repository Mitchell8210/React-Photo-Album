import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Albums from "./Albums"
import Pictures from "./Pictures"
import "../styles/base.css"
import SinglePicures from "./SinglePictures"

function App() {
  return (
  <Router>
  


  <Route exact path="/" component={Albums}/>
  <Route path="/Pictures/:albumId" component={Pictures}/>
  <Route path="/SinglePictures/:id" component={SinglePicures}/>
  </Router>
  )

}

export default App
