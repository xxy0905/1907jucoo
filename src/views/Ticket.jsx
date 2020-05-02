import React, { Component } from 'react'
import style from "../assets/css/ticket.module.css"
import img1 from "../assets/img/1.png"
import img2 from "../assets/img/2.jpg"
import img3 from "../assets/img/3.png"
import axios from "axios"
export default class Ticket extends Component {
  constructor(){
    super();
    this.state={
      desc:{},
      important_note:{}
    }
  }
  render() {
    // console.log(this.props)
    return (

      <div className={style.ticket}>
          {/* 顶部 */}
          <div className={style.top}>
            <div className={style.title}>
              <i className="fa fa-angle-left"></i>演出详情
              </div>

            <div className={style.content}>
              <div className={style.content_right}>
                <i className={style.img2}><img src={img2} alt="" />
                  <i className={style.img1}><img src={img1}></img></i>
                </i>
              </div>
              <div className={style.content_left}>
                <p>【演出延期】2020第七届城市戏剧节《涂红》-石家庄站</p>
                <p className={style.bold}>￥49-199</p>
              </div>
            </div>

          </div>


          <div className={style.support}>
            <div className={style.item}>
              <span>可选座</span>
              <span>电子票</span>
              <span>退票无忧</span>
            </div>

            <div className={style.brief}>
              <div className={style.info}>
                <p>2020.08.22-08.23</p>
                <p>石家庄 | 石家庄大剧院 中剧场</p>
                <p>河北省石家庄市裕华区塔南路72号</p>
                <i className={style.position}><img src={img3} alt="" /></i>
              </div>
            </div>

            <div className={style.plus}>
              <div className={style.plus_tips}>
                <div>
                  <span><i className={style.card}>橙PLUS卡</i></span>
                  <span>开通送￥200 最高省19.8元</span>
                  <span>立即开卡</span>
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
              <div  dangerouslySetInnerHTML={{__html:this.state.important_note}} />
            </div>
            <div className={style.detail_box}>
                <div  dangerouslySetInnerHTML={{__html:this.state.desc}} />
            </div>
            
          </div>


          {/* 提醒 */}
          <div className={style.warn}>
              <div className={style.warn_title}>
                <span>温馨提醒</span>
              </div>
              <div className={style.warn_list}>
                <span> ● 配送说明</span>
                <span> ● 订单说明</span>
                <span> ● 确认订单</span>
                <span> ● 购票提醒</span>
              </div>
          </div>

          

      </div>
    )
  }
  async componentDidMount(){
    const {data} = await axios.get("/api/Schedule/Schedule/getScheduleInfo?schedular_id=111609&version=6.1.1&referer=2");
    this.setState({
      desc:data.data.static_data.show_desc.desc,
      important_note:data.data.static_data.important_note
    })
    // const desc = data.data.static_data.show_desc.desc
    // console.log(desc)
    console.log(data.data.static_data.important_note)
  }
}
