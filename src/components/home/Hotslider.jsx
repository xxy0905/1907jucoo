
import React from 'react';
import ReactSwipe from 'react-swipe';
import  slider  from  '../../assets/css/home/comments/slider.module.scss'

class hotSlider extends React.Component{
  constructor() {
    super();
    this.state = {
      index: 0
    }
  }
  render() {
    let opt = {
      callback: function(index) {
        this.setState({index: Number(index)})
      }.bind(this)
    }
    return (
      <div className={slider.content}>
        <ReactSwipe className="carousel" swipeOptions={opt}> 
            <div className={slider.zong}>
                <div className={slider.page}>
                    <ul className='clear-fix'>
                        <a href="">
                        <div className={slider.top}></div>
                        <div className={slider.bottom}></div>
                    </a>
                </ul>
            </div>
                <div className={slider.page}>
                    <ul className='clear-fix'>
                        <a href="">
                        <div className={slider.top}></div>
                        <div className={slider.bottom}></div>
                    </a>
                </ul>
            </div>
                <div className={slider.page}>
                    <ul className='clear-fix'>
                        <a href="">
                        <div className={slider.top}></div>
                        <div className={slider.bottom}></div>
                    </a>
                </ul>
            </div>
            </div>
            <div className={slider.zong}>
                <div className={slider.page}>
                    <ul className='clear-fix'>
                        <a href="">
                        <div className={slider.top}></div>
                        <div className={slider.bottom}></div>
                    </a>
                </ul>
            </div>
                <div className={slider.page}>
                    <ul className='clear-fix'>
                        <a href="">
                        <div className={slider.top}></div>
                        <div className={slider.bottom}></div>
                    </a>
                </ul>
            </div>
                <div className={slider.page}>
                    <ul className='clear-fix'>
                        <a href="">
                        <div className={slider.top}></div>
                        <div className={slider.bottom}></div>
                    </a>
                </ul>
            </div>
            </div>
        </ReactSwipe>
      </div>
    )
  }
   componentDidUpdate() {
  }
}

 
export default hotSlider;
