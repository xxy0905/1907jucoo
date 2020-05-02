import React, { Component } from 'react'
import {
    NavLink,
    Route
} from "react-router-dom"
import MyRouter from "../components/common/MyRouter"
import '../assets/nav.css'
export default class Index extends Component {
    render() {
        return (
            <div>
                <MyRouter router={this.props.childrens}></MyRouter>
                <nav className='nav'>
                    <NavLink  exact to={"/"}>首页</NavLink>
                    <NavLink to={"/cinema"}>演出</NavLink>
                    <NavLink to={"/wallet"}>票夹</NavLink>
                    <NavLink to={"/my"}>我的</NavLink>
                </nav>
            </div>
        )
    }
}
