import React, { Component } from 'react'
import {
    NavLink,
} from "react-router-dom"
import MyRouter from "../components/common/MyRouter"
import '../assets/css/home/comments/nav.css'
import {connect}  from  'react-redux'
 class Index extends Component {
     constructor(props){
         super(props)
         this.state={
             Index:0
         }
     }
    render() {
        return (
            <div>
                <MyRouter router={this.props.childrens}></MyRouter>
                <nav  className="nav">
                {
                    this.props.home.classify.bottom_list.map((v,i)=>(
                        <div onClick={()=>this.setState({Index:i})}
                         className={this.state.Index===i?"select":"wei"}
                         key={v.name}>
                             <div  className={this.state.Index===i?"selectkeshi":"weibu"}>
                                <img onClick={()=>this.props.history.push(v.url)}  className={this.state.Index===i?"selectimg":"weiimg"} src={v.pic} alt=""/>
                            </div>
                         <NavLink className={this.state.Index===i?"selectdi":"weidi"} exact to={v.url}>{v.name}</NavLink>
                        </div>
                    ))
                 } 
                </nav>
                <div className='xiacheng'></div>
            </div>
        )
    }
}
const  mapStateToProps=function(state){
    return  state
}
export default connect(mapStateToProps)(Index)