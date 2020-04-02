import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class Dashboard extends React.Component{
    constructor(){
        super()
        this.state={
            user:[],
            posts:[],
            redirect:false
        }
    }
    componentDidMount(){
        const uid= localStorage.length != 0 ?
        localStorage.getItem("storeId") : this.props.match.params.uid
        axios.get(`https://jsonplaceholder.typicode.com/users/${uid}`)
        .then(response =>{
            const user=response.data 
            this.setState({user})
        })
        .catch(err=>{
            console.log(err)
        })
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${uid}`)
        .then(response =>{
            const posts=response.data 
            this.setState({posts})
        })
        .catch(err=>{
            console.log(err)
        })
    }
     handleOut=(e)=>{
         localStorage.clear()
         this.setState({redirect : true})
     }
     
     render(){
         return(
             <div>
                 <center>
                     <table border="1">
                         {this.state.redirect && <redirect to='/'/>}
                         <button onClick={this.handleOut}>Logout</button>
                         <p>Name :  {this.state.user.name}  </p>
                         <p>Email : {this.state.user.email} </p>
                         <p>Phone: {this.state.user.phone}  </p>
                         <p>Website: {this.state.user.website} </p>
                         <br/> <hr/>
                         <h2> Posts Made </h2>
                         <ul>
                             {this.state.posts.map((post,i)=>{
                                 return(
                                     <li key={i}>{post.title}</li>
                                 )
                             })}
                         </ul>
                     </table>
                 </center>
             </div>
         )
     }
}
export default Dashboard