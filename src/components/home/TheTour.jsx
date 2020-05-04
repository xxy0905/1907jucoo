import React, { Component } from 'react';
import  home  from  '../../assets/css/home/comments/theTour.module.scss'
import  Tittle  from  '../common/Tittle'
import  getTheTourData from '../../store/actionCreator/home/commones/theTour'
import   {
    connect
}  from  'react-redux'
 class TheTour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            v:this.props.pro
        }
    }
    render() { 
       
        return (
            <div className={home.theTour}>     
                <Tittle p='巡回演出' right='全部' href="https://m.juooo.com/tour/tourShowInfo?sid=2"></Tittle>
            { this.props.pro[0]?    
                    <div className={home.theTour_content}>
                        <div className={home.theTour_content_left}>
                            <img src={this.props.pro[0].mobile_col_img} alt="nima"/> 
                        </div>
                        <div className={home.theTour_content_right}>
                        <p>{this.props.pro[0].end_time}</p>
                        <p className={home.theTour_content_right_p}>{this.props.pro[0].name}</p>
                        <div>
                           <p>
                           <span>￥{this.props.pro[0].min_price}</span>起
                          </p>
                          <div>
                              {this.props.pro[0].citys.map(v=>(
                                  <span key={v.id}>
                                      <span>{v.name}</span>
                                  </span>
                              ))}
                          </div>
                        </div>
                        </div>
                   </div>:<div/>
                     }
            </div>
        );
    }
    componentDidMount(){
       
    //   this.props.getTheTour()
    }
}
// const mapStateToProps=(state)=>{
//     console.log(state)
//     return state
// }
// const  mapDispatchToProps=(dispatch)=>{
//     return{
//         getTheTour:async()=>{
//             dispatch(await getTheTourData())
//             console.log(await  getTheTourData(),12345        
            
//         }
//     } 
// }
// export default connect(mapStateToProps ,mapDispatchToProps)(TheTour);
export default TheTour