
import React from 'react';
import  slider  from  '../../assets/css/home/comments/slider.module.scss'

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
                    <div key={v.show_name} className={slider.solo}>
                        <a href={v.schedular_url}>
                        <div className={slider.imgBox}>
                            <img src={v.pic}/>
                        </div>
                        <div className={slider.imgBottom}>
                           <p>{v.show_name}</p>
                        </div>
                        </a>
                        </div>

                ))
            }
        </div>
    )
  }
   componentDidUpdate() {
  }
}

 
export default  hotSlider;
