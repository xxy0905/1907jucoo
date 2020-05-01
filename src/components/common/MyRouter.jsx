import  React  from  'react'
import { Route, NavLink } from 'react-router-dom'
import GuardRouter from "./GuardRouter"
export  default  class   MyRouter  extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return(
            <div>
                {
                    this.props.router.map(v=>(
                            <Route key={v.path} exact={v.exact}  path={v.path} render={()=><GuardRouter {...v}></GuardRouter>}></Route>
                    ))
                }
            </div>
        )
    }
}