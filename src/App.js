import React from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
//npm install react-router-dom //{} to fetch multiple values from file
import { BrowserRouter, Route, Link} from 'react-router-dom'

function App(props){
    return (
        <BrowserRouter>
        <div>
           
           <Route path="/" component={Login}/>
           <Route path="/dashboard/:id" component={Dashboard} />
          
        </div>
        </BrowserRouter>
    )
}

export default App