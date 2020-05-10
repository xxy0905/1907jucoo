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
      bb:true,
      showList:[],
    }
  }
  render() {
    return (
      
      <div className={style.ticket}>
          
      <div>
            {
              <div className={style.bg}><img src={this.props.share_pic} alt=""/></div>
            }
            <div className={style.top} >
            
              <div className={style.title}>
              <i className="iconfont" onClick={()=>{
                this.props.history.go(-1)
              }}>&#xe6ae;</i>
              <span className={style.center}>演出详情</span>
              <div>
                <i className="iconfont">&#xe639;</i>&nbsp;&nbsp;
                <i className="iconfont" onClick={()=>{
                this.props.history.push('/')
              }}>&#xe658;</i>
              </div>
              
              </div>
              
              <div className={style.content}>
                <div className={style.content_right}>
                {
                  <i className={style.img2}><img src={this.props.share_pic} alt="" />
                  {
                    this.state.showList.map((v,i)=>(
                      <span key={i}>
                        {
                          v.method>0?<i className={style.img1}><img src={img1}></img></i>:""
                        }
                      </span>
                    ))
                  }
                    
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
                
              }
              {
                this.props.is_package>0?
                <span><i className="iconfont_p">&#xe63c;</i> </span>:""
              }
                
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
                  
                </div>
                <div className={style.location}>
                  <i className={style.position}><img src={img3} alt="" /></i>
                </div>
              </div>

              <div className={style.plus}>
                <div className={style.plus_tips}>
                  <div>
                    <span><i className={style.card}>橙PLUS卡</i></span>
                    {
                      <span>开通送￥200 最高省{this.props.discount_max_price}元</span>

                    }
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

                    this.state.showList.slice(0,4).map((v,i)=>(
                      <div  key={i}>
                      {
                        this.props.schedular_id!=v.schedular_id?<div className={style.recommend_box} >
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
                      </div> :""
                      }
                                            
                      </div>
                    ))  
                                  
                  }
                  
            </div>
            {
              this.state.showList.length>3?
              <div className={style.mores}>
                <span>查看更多演出 ></span> 
              </div>:""
            }
            
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
 
  async componentWillReceiveProps(nextProps){
    const {data} =await axios.get("/api/Show/Search/getShowList?category="+nextProps.cate_parent_id+"&city_id="+nextProps.city_id+"&version=6.1.1&referer=2")
    this.setState({
      showList:data.data.list,
    })
    document.title = nextProps.share_title
  }
  componentDidMount(){
    
  }
  componentWillMount(){
    this.props.ticketList(this.props.match.params.id);
    
  }

}

function mapStateToProps({ticket}){
  return {
    is_package:ticket.is_package,
    discount_max_price:ticket.discount_max_price,
    desc:ticket.desc,
    important_note:ticket.important_note,
    support:ticket.support||[],
    share_pic:ticket.share_pic,
    city_id:ticket.city_id,
    cate_parent_id:ticket.cate_parent_id,
    share_title:ticket.share_title,
    price_range:ticket.price_range,
    show_time_end:ticket.show_time_end,
    show_time_start:ticket.show_time_start,
    city_name:ticket.city_name,
    venue_address:ticket.venue_address,
    venue_name:ticket.venue_name,
    list:ticket.list||[],
    schedular_id:ticket.schedular_id,
  }
}
function mapDispatchToProps(dispatch){
  return{
    ticketList(schedular_id){
      dispatch(ticketCreator.getDetail(schedular_id))
    }
    }
}
// export default withRouter(My);
export default  connect(mapStateToProps,mapDispatchToProps)(Ticket)