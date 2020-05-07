import React, { Component } from 'react'
import style from "../assets/css/theatreDetail.module.css"
import img7 from "../assets/img/7.jpg"
import img3 from "../assets/img/3.png"
import axios from "axios"
import {
    connect
  } from  'react-redux';
import theaterDetailCreator from "../store/actionCreator/theaterDetail"
class TheaterDetail extends Component {
    render() {
        return (
            <div>
                <div className={style.header}>
                <div className={style.header_box}>
                    <div className={style.top}><i className="iconfont_tr" onClick={()=>{
                            this.props.history.go(-1)
                        }}>&#xe6ae;</i>
                    </div>
                    
                    <div className={style.middle}>
                    {
                        <span className={style.img7}><img src={this.props.theatre_pic} alt=""/></span>
                    }
                        
                        <span className={style.info}>
                        {

                            <p>{this.props.theatre_name}</p>
                        }
                        {

                            <p>{this.props.sch_num}场在售演出</p>
                        }
                        </span>
                    </div>

                    <div className={style.bottom}>
                    {
                        <span>{this.props.city_name} | {this.props.theatre_address}</span>
                    }
                        
                        <div  className={style.position}>
                            <i><img src={img3} alt="" /></i>
                        </div>
                        
                    </div>
                </div>
                </div>
                <div className={style.hot}>
                    
                        <div className={style.hot_title}>
                            <span>热门演出</span>   
                        </div>
                        
                        {
                    
                    this.props.list.map((v,i)=>(
                      <div key={i} className={style.recommend_box} >
                          <div className={style.recommend_box2} onClick={()=>{
                              this.props.history.push("/ticket/"+v.schedular_id)
                          }}>
                            <span><img className={style.recommend_img} src={v.pic} alt="" /></span>
                            <span className={style.recommend_schedule}>
                            <p>{this.$filters.getShowTime(v.start_show_timestamp,v.end_show_timestamp)}</p>
                            <p>{v.name}</p>
                            <p>{v.city_name} | {v.venue_name}</p>
                            <p className={style.label}>
                            {
                              v.support_desc.map((item,key)=>(
                                  <span key={key}>{item}</span>
                              )) 
                            }
                            </p>
                            <p className={style.label_price}>￥{v.min_price} <span>起</span> </p>
                            </span>
                          </div>
                        </div>
                      
                    ))
                    
                  } 
                </div>
                <div className={style.noMore}>
                    <span>没有更多了</span>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.showList();
        this.props.header(this.props.match.params.id)
    }
}

function mapStateToProps({theaterDetail}){
    console.log(theaterDetail)
    // return state
    return {
        list:theaterDetail.theater_detail,
        sch_num:theaterDetail.sch_num,
        theatre_pic:theaterDetail.theatre_pic,
        city_name:theaterDetail.city_name,
        theatre_address:theaterDetail.theatre_address,
        theatre_name:theaterDetail.theatre_name,
        venue_ids:theaterDetail.venue_ids
    }
  }
function mapDispatchToProps(dispatch){
    
    return{
        showList(){
            dispatch(theaterDetailCreator.getShow())
            console.log(this)
        },
        header(id){
            dispatch(theaterDetailCreator.getH(id))
        }
      }
  }

export default  connect(mapStateToProps,mapDispatchToProps)(TheaterDetail)
