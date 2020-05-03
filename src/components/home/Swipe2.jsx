
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
                    <a href="">
                    <li>
                        <div className={swipe.li_left}>
                                    <img src="https://image.juooo.com/group1/M00/03/2E/rAoKmV2tZOeADHvUAACprrXJhIE919.jpg" alt=""/>
                                </div>
                                <div className={swipe.li_right}>
                                    <h3>浪漫经典《美女与野兽》</h3>
                                    <div className={swipe.p}>
                                        <div>
                                            <span>5</span>折起
                                    </div>
                                    <div>
                                        <button>立即抢购</button>
                                    </div>
                                </div>
                            </div>
                     </li>
                </a>
            </ul>
          </div>
        <div className={swipe.page}>
            <ul className='clear-fix'>
                <a href="">
                <li>
                    <div className={swipe.li_left}>
                                <img src="https://image.juooo.com/group1/M00/03/38/rAoKmV2_wIuAWsXBAADPA6clalw098.jpg" alt=""/>
                            </div>
                            <div className={swipe.li_right}>
                                <h3>浪漫经典《美女与野兽》</h3>
                                <div className={swipe.p}>
                                    <div>
                                        <span>5</span>折起
                                    </div>
                                    <div>
                                        <button>立即抢购</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </a>
                </ul>
            </div>
        <div className={swipe.page}>
            <ul className='clear-fix'>
                <a href="">
                <li>
                    <div className={swipe.li_left}>
                                <img src="https://image.juooo.com/group1/M00/03/D5/rAoKNV2m0miATupUAACePEfinjA021.jpg" alt=""/>
                            </div>
                            <div className={swipe.li_right}>
                                <h3>浪漫经典《美女与野兽》</h3>
                                <div className={swipe.p}>
                                    <div>
                                        <span>5</span>折起
                                    </div>
                                    <div>
                                        <button>立即抢购</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </a>
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

 
export default SWipe2;
