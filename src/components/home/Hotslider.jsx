
import React from 'react';
import  slider  from  '../../assets/css/home/comments/slider.module.scss'
import {
    withRouter
} from "react-router-dom"
class hotSlider extends React.Component{
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
        <div className={slider.imageList}>
            {
                this.props.data.map(v=>(
                    <div key={v.show_name} className={slider.solo} onClick={()=>{
                        this.props.history.push("/ticket/"+v.schedular_url.slice(27))
                    }}>
                        <div className={slider.imgBox}>
                            <img src={v.pic}/>
                        </div>
                        <div className={slider.imgBottom}>
                           <p>{v.show_name}</p>
                        </div>
                        
                        </div>

                ))
            }
            
        </div>
    )
  }
   componentDidUpdate() {
  }
}

 
export default withRouter(hotSlider)
