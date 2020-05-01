import React, { Component } from 'react'
import {
    NavLink,
    Route
} from "react-router-dom"
import MyRouter from "../components/common/MyRouter"
import Cinema from "./Cinema"
export default class Index extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <nav>
                    <NavLink  exact to={"/"}>首页</NavLink>
                    <NavLink to={"/cinema"}>演出</NavLink>
                    <NavLink to={"/wallet"}>票夹</NavLink>
                    <NavLink to={"/my"}>我的</NavLink>
                </nav>
                <MyRouter router={this.props.childrens}></MyRouter>
            </div>
        )
    }
}
