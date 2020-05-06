import React, { Component } from 'react'
import style from "../assets/css/theatreList.module.css"
export default class TheatreList extends Component {
    render() {
        return (
            <div className={style.theatreList}>
                <div className={style.single}>
                    剧院
                </div>
                <div className={style.theater_info}>
                    <div className={style.theater_title}>
                        南山文体中心
                    </div>
                    <div className={style.theater_swiper}>
                        千与千寻
                    </div>
                </div>
            </div>
        )
    }
}
