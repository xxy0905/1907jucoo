
import React from 'react';
import ReactSwipe from 'react-swipe';
import  swipe  from  '../../assets/css/home/comments/swipe.module.scss'
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
                  <a href="http://search.juooo.com/?k=%E5%B0%8F%E7%8C%AA%E4%BD%A9%E5%A5%87"><img src="https://image.juooo.com/group1/M00/03/77/rAoKNV0fA7GAHpmzAAHi8GoEsfE932.jpg" alt=""/></a>
            </ul>
          </div>
          <div className={swipe.page}>
            <ul className='clear-fix'>
             <a href="https://m.juooo.com/plus/index"><img src="https://image.juooo.com/group1/M00/03/96/rAoKmV6W4OaARc7lAAVC4MgntP4875.png" alt=""/></a>
            </ul>
          </div>
          <div className={swipe.page}>
            <ul className='clear-fix'>
              <a href="https://m.juooo.com/ticket/114254"><img src="https://image.juooo.com/group1/M00/03/95/rAoKmV6Ods6AIHoPAAFqMr3vOqU261.jpg" alt=""/></a>
            </ul>
          </div>
          <div className={swipe.page}>
            <ul className='clear-fix'>
              <a href="http://search.juooo.com/?k=%E9%AB%98%E6%B8%85%E5%BD%B1%E5%83%8F"><img src="https://image.juooo.com/group1/M00/04/3E/rAoKNV6ClgWAOtm_AAEhpdmQomE538.jpg" alt=""/></a>
            </ul>
          </div>
          <div className={swipe.page}>
            <ul className='clear-fix'>
              <a href="https://m.juooo.com/ticket/109538"><img src="https://image.juooo.com/group1/M00/03/95/rAoKmV6G87GAHBZeAAFRP1wgp3U464.jpg" alt=""/></a>
            </ul>
          </div>
          <div className={swipe.page}>
            <ul className='clear-fix'>
              <a href="https://m.juooo.com/ticket/112564"><img src="https://image.juooo.com/group1/M00/04/3F/rAoKNV6G8wWAbQo9AAFKecTbTmI168.jpg" alt=""/></a>
            </ul>
          </div>
          <div className={swipe.page}>
            <ul className='clear-fix'>
              <a href="http://search.juooo.com/?k=%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%BA%A6%E4%BC%9A"><img src="https://image.juooo.com/group1/M00/03/6D/rAoKmV4B3DeAAheBAAE8k0yWnNo649.png" alt=""/></a>
            </ul>
          </div>
          <div className={swipe.page}>
            <ul className='clear-fix'>
              <a href="https://m.juooo.com/search/index?k=%E6%91%87%E6%BB%9A%E7%BA%A2%E4%B8%8E%E9%BB%91"><img src="https://image.juooo.com/group1/M00/03/6D/rAoKmV4B3CmARboCAACCt7TZJ7k095.png" alt=""/></a>
            </ul>
          </div>
          <div className={swipe.page}>
            <ul className='clear-fix'>
              <a href="https://m.juooo.com/Cardproduct/cardhappy/card_id/228"><img src="https://image.juooo.com/group1/M00/03/6D/rAoKmV4B29-AdwTZAAB-i9-En8E765.png" alt=""/></a>
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

 
export default Category;
