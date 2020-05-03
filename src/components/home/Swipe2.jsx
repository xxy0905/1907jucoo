
import React from 'react';
import ReactSwipe from 'react-swipe';
import  swipe  from  '../../assets/css/home/comments/swipe2.module.scss'
import  action from  '../../store/actionType/swipe'

class SWipe2 extends React.Component{
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
                 1
            </ul>
          </div>
          <div className={swipe.page}>
            <ul className='clear-fix'>
                5
            </ul>
          </div>
          <div className={swipe.page}>
            <ul className='clear-fix'>
                3
            </ul>
          </div>
          <div className={swipe.page}>
            <ul className='clear-fix'>
                4
            </ul>
          </div>
          
        </ReactSwipe>
        <div className={swipe.index}>
          <ul>
            <li className={this.state.index === 0 ? swipe.selected: ''}></li>
            <li className={this.state.index === 1 ? swipe.selected: ''}></li>
            <li className={this.state.index === 2 ? swipe.selected: ''}></li>
            <li className={this.state.index === 3 ? swipe.selected: ''}></li>
            <li className={this.state.index === 4 ? swipe.selected: ''}></li>
            <li className={this.state.index === 5 ? swipe.selected: ''}></li>
            <li className={this.state.index === 5 ? swipe.selected: ''}></li>
            <li className={this.state.index === 7 ? swipe.selected: ''}></li>
            <li className={this.state.index === 8 ? swipe.selected: ''}></li>
          </ul>
        </div>
      </div>
    )
  }
   componentDidUpdate() {
  }
}

 
export default SWipe2;
