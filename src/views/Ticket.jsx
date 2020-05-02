import React, { Component } from 'react'
import style from "../assets/css/ticket.module.css"
import img1 from "../assets/img/1.png"
import img2 from "../assets/img/2.jpg"
import img3 from "../assets/img/3.png"
export default class Ticket extends Component {
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
                <i className={style.img2}><img src={img2} alt=""/>
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
              <i className={style.position}><img src={img3} alt=""/></i>
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

        <div className={style.vip}>
            <span>VIP+</span>
            <span>:</span>
            <span>V+会员享</span>
            <span>国内免邮 + 双倍积分</span>
        </div>
      </div>
    )
  }
}
