import  React from  'react'
import  { Button}  from  '@material-ui/core'
import { Drawer } from '@material-ui/core';
import  {BottomNavigationAction} from  '@material-ui/core'
class My extends React.Component{
    constructor(props){
        super(props)
        this.state={
            bool:false
        }
    }
    render(){
        return(
            <div>my
                <div ></div>
                <React.Fragment>
                    <Button onClick={()=>this.setState({bool:true})}>我的</Button>
                    <Drawer anchor='right' open={this.state.bool} >
                    {'wweerjkeorke'}
                    <Button onClick={()=>this.setState({bool:false})}>我的</Button>
                    </Drawer>
                </React.Fragment>
            </div>
        )
    }
    toggleDrawer(){

    }
} 
export default My