
import React from 'react';
import ReactSwipe from 'react-swipe';
import  swipe  from  '../../assets/swipe.module.scss'
import  action from  '../../store/actionType/swipe'

class Category extends React.Component{
  constructor() {
    super();
    this.state = {
      index: 0
    }
  }
  render() {
    let opt = {
      auto: 5000,
      callback: function(index) {
        this.setState({index: Number(index)})
      }.bind(this)
    }
    return (
      <div className={swipe.content}>
        <ReactSwipe className="carousel" swipeOptions={opt}>
          <div className={swipe.page}>
            <ul className='clear-fix'>
              <li className="float-left ktv">KTV</li>
              <li className="float-left ktv">KTV</li>
              <li className="float-left ktv">KTV</li>
              <li className="float-left ktv">KTV</li>
              <li className="float-left ktv">KTV</li>
              <li className="float-left ktv">KTV</li>
              <li className="float-left ktv">KTV</li>
              <li className="float-left ktv">KTV</li>
              <li className="float-left ktv">KTV</li>
              <li className="float-left ktv">KTV</li>
            </ul>
          </div>
          <div className={swipe.page}>
            <ul className='clear-fix'>
              <li className="float-left meishi">KTV</li>
              <li className="float-left jiudian">KTV</li>
              <li className="float-left meishi">KTV</li>
              <li className="float-left waimai">KTV</li>
              <li className="float-left meishi">KTV</li>
              <li className="float-left meishi">KTV</li>
              <li className="float-left dujiachuxing">KTV</li>
              <li className="float-left zuliaoanmo">KTV</li>
              <li className="float-left ribencai">KTV</li>
              <li className="float-left ribencai">KTV</li>
            </ul>
          </div>
          <div className={swipe.page}>
            <ul className='clear-fix'>
              <li className="float-left xican">SPA</li>
              <li className="float-left xican">SPA</li>
              <li className="float-left xican">SPA</li>
              <li className="float-left xican">SPA</li>
              <li className="float-left xican">SPA</li>
              <li className="float-left xican">SPA</li>
              <li className="float-left xican">SPA</li>
              <li className="float-left xican">SPA</li>
              <li className="float-left xican">SPA</li>
              <li className="float-left xican">SPA</li>
            </ul>
          </div>
        </ReactSwipe>
        <div className={swipe.index}>
          <ul>
            <li className={this.state.index === 0 ? swipe.selected: ''}></li>
            <li className={this.state.index === 1 ? swipe.selected: ''}></li>
            <li className={this.state.index === 2 ? swipe.selected: ''}></li>
          </ul>
        </div>
      </div>
    )
  }
   componentDidUpdate() {
  }
}

 
export default Category;
