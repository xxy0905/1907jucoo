import React, { Component } from 'react'
import style from "../assets/css/ticket.module.css"
import img1 from "../assets/img/1.png"
import img3 from "../assets/img/3.png"
import img5 from "../assets/img/5.png"
import axios from "axios"
import {
  connect
} from  'react-redux';
import ticketCreator from "../store/actionCreator/ticket"

class Ticket extends Component {
  constructor(){
    super()
    this.state={
      bb:true
    }
  }
  render() {
    // console.log(this.props.support)
    
    // console.log(this.props)
    return (

      <div className={style.ticket}>
      <div>
            {/* 顶部 */}
            <div className={style.top}>
              <div className={style.title}>
              <i className="iconfont" onClick={()=>{
                this.props.history.go(-1)
                
                console.log(this.props)
              }}>&#xe6ae;</i>
              <span className={style.center}>演出详情</span>
              <div>
                <i className="iconfont">&#xe639;</i>&nbsp;&nbsp;
                <i className="iconfont">&#xe658;</i>
              </div>
              
              </div>

              <div className={style.content}>
                <div className={style.content_right}>
                {
                  <i className={style.img2}><img src={this.props.share_pic} alt="" />
                    <i className={style.img1}><img src={img1}></img></i>
                  </i>
                }
                </div>
                <div className={style.content_left}>
                {
                  <p>{this.props.share_title}</p>
                }
                {
                  <p className={style.bold}>￥{this.props.price_range}</p>
                  
                }
                </div>
              </div>

            </div>


            <div className={style.support}>
              <div className={style.item}>
              
              {
               this.props.support.map(v=>(
                <span key={v}><i className="iconfont_gou">&#xe6ce;</i> {v}</span>
            ))
                
                // console.log(this.props.support)
              }
                <span><i className="iconfont_p">&#xe63c;</i> </span>
              </div>

              <div className={style.brief}>
                <div className={style.info}>
                
                  {
                    <p>{this.$filters.getShowTime(this.props.show_time_start,this.props.show_time_end)} <i className="iconfont_one">&#xe65e;</i></p>
                  }
                  
                  {
                    <p>{this.props.city_name} | {this.props.venue_name}</p>
                  }
                  {
                    <p>{this.props.venue_address}</p>
                  }
                  <i className={style.position}><img src={img3} alt="" /></i>
                </div>
              </div>

              <div className={style.plus}>
                <div className={style.plus_tips}>
                  <div>
                    <span><i className={style.card}>橙PLUS卡</i></span>
                    <span>开通送￥200 最高省19.8元</span>
                    <span>立即开卡 <i className="iconfont_two">&#xe65e;</i></span>
                  </div>

                </div>
              </div>


            </div>


            {/* vip */}
            <div className={style.vip}>
              <div className={style.vip_box}>
                <span>VIP+</span>
                <span>:</span>
                <span>V+会员享</span>
                <span>国内免邮 + 双倍积分</span>
                <span><i className="iconfont_three">&#xe65e;</i></span>
              </div>
            </div>
            {/* 入场 */}
            <div className={style.entry}>
              <div className={style.entry_box}>
                <span>入&nbsp;&nbsp;&nbsp;场</span>
                <span>:</span>
                <span>1.1以上或5周岁以上儿童，凭票入场，其他儿童谢绝入场.</span>
              </div>

            </div>

            {/* 详情 */}
            <div className={style.detail}>
              <div className={style.detail_title}>
                <p>演出介绍</p>
                <div  dangerouslySetInnerHTML={{ __html: this.props.important_note }} />
              </div>
              <div className={style.detail_box} style={{display:this.state.bb?"none":"block"}}>
                <div dangerouslySetInnerHTML={{ __html: this.props.desc }} />
              </div>
              <div className={style.detail_box2}  style={{display:this.state.bb?"block":"none"}}>
                <div className={style.back}></div>
                <div className={style.all} onClick={()=>{
                  this.setState({
                    bb:false
                  })
                }}>展示全部</div>
                <div dangerouslySetInnerHTML={{ __html: this.props.desc }} />
                
              </div>
            </div>


            {/* 提醒 */}
            <div className={style.warn}>
            
              <div className={style.warn_title}>
                <span>温馨提醒</span>
                <span><i className="iconfont_three">&#xe65e;</i></span>
              </div>
              <div  className={style.warn_list}>
              {
                this.props.list.map((v,i)=>(
                    <span key={i}> ● {v.title}</span>
                  ))
              }
                      
              </div>
              
            </div>

            {/* 相关推荐 */}
            <div className={style.recommend}>
              
                <div className={style.recommend_title}>
                  <span>相关推荐</span>
                </div>
                
                  
                  {
                    this.props.showList.map((v,i)=>(
                      // schedular_id
                      // onClick={this.props.relevant(v.schedular_id)}
                      //onClick={this.props.ticketList(v.schedular_id)}
                      <div key={i} className={style.recommend_box} >
                          <div className={style.recommend_box2} onClick={()=>{
                            this.props.ticketList(v.schedular_id);
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
      </div>
        

        <div className={style.placeholder}>

        </div>
        {/* 底部 */}
        <div className={style.bottom}>
          <div className={style.bottom_box}>
            <div className={style.img5}><img src={img5} alt=""/> 客服</div>
            <div className={style.line}>选座购买</div>
          </div>
            
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.props.ticketList(this.props.schedular_id);
    this.props.recommend()
    // console.log(this.props.relevant(109024))
    // console.log(Date.now())
  }
  componentDidUpdate(){
    // console.log(this)
    // this.props.ticketList(this.props.schedular_id);
  }
}

function mapStateToProps(state){
  console.log(state)
  // return state
  return {
    desc:state.ticket.desc,
    important_note:state.ticket.important_note,
    support:state.ticket.support||[],
    share_pic:state.ticket.share_pic,
    share_title:state.ticket.share_title,
    price_range:state.ticket.price_range,
    show_time_end:state.ticket.show_time_end,
    show_time_start:state.ticket.show_time_start,
    city_name:state.ticket.city_name,
    venue_address:state.ticket.venue_address,
    venue_name:state.ticket.venue_name,
    list:state.ticket.list||[],
    showList:state.ticket.showList||[],
    schedular_id:state.ticket.schedular_id
  }
}
function mapDispatchToProps(dispatch){
  
  return{
    ticketList(schedular_id){

      dispatch(ticketCreator.getDetail(schedular_id))

    },
    recommend(){
      dispatch(ticketCreator.getShowList())
    }
    }
}
// export default withRouter(My);
export default  connect(mapStateToProps,mapDispatchToProps)(Ticket)