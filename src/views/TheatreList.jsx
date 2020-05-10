import React, { Component } from 'react'
import img7 from "../assets/img/7.jpg"
import img8 from "../assets/img/8.jpg"
import {
    connect
  } from  'react-redux';
  import theatreListCreator from "../store/actionCreator/theatreList"
import style from "../assets/css/theatreList.module.css"
class TheatreList extends Component {
    render() {
        return (
            <div className={style.theatreList}>
                <div className={style.single}>
                    剧院
                </div>
                
                {
                    
                    this.props.theatre_list.map((v,i)=>(
                        <div key={i}>
                            {
                                v.count>0?
                                <div className={style.theater_info} >
                        <div className={style.theater_info_box}>
                            <div className={style.theater_title} onClick={()=>{
                                this.props.history.push("/theatre/detail/"+v.id+"/"+v.vid)
                            }}>
                                <div className={style.img7}><img src={v.pic} alt=""/></div>
                                <div className={style.theater_name}>
                                    <span>{v.name}</span>
                                    <p>{v.count}场在售演出</p>
                                </div>
                                <div className={style.theater_more}>
                                    <i>···</i>
                                </div>
                            </div>
                            <div className={style.theater_swiper}>
                            {
                                
                                v.showList.slice(0, 6).map(k=>(
                                        <div key={k.id} className={style.theater_swiper_slide}>
                                            <div className={style.theater_swiper_box}>
                                                <p className={style.theater_swiper_date}>{k.show_time}</p>
                                                <p className={style.theater_swiper_dian}>·</p>
                                            </div>
                                            <div className={style.theater_swiper_pic}><img src={k.pic} alt=""/></div>
                                        </div>
                                        
                                        ))
                            }
                                {
                                    v.count>5?
                                    <div className={style.theater_swiper_slide}>
                                        <div className={style.theater_swiper_box}>
                                            <p className={style.theater_swiper_date}>&nbsp;</p>
                                            <p className={style.theater_swiper_dian}>·</p>
                                        </div>
                                        
                                        <p className={style.theater_swiper_more}>查看更多></p>
                                    </div>:""
                                }
                                
                            </div>
                        </div>
                    
                        
                    </div>:""
                            }
                        </div>
                    
                ))
                }
                <div className={style.box}></div>
                
            </div>
        )
    }
    componentWillMount(){
        this.props.theatreList()
    }
}
function mapStateToProps(state){
    // console.log(3333,state)
    // return state
    return {
        theatre_list:state.theatreList.theatre_list,
    }
  }
  function mapDispatchToProps(dispatch){
    
    return{
        theatreList(){
            dispatch(theatreListCreator.getTheatre())
        }
      }
  }
export default  connect(mapStateToProps,mapDispatchToProps)(TheatreList)