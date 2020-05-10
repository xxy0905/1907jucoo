import React, { Component } from 'react';
import nav  from '../assets/css/show.module.scss'
import  leftIcon from '../assets/img/show/icon/arrow_left.png'
import  menu from '../assets/img/show/icon/list.png'
import  address  from  '../assets/img/home/icon/地址.png'
import  {connect}  from  'react-redux'
import  getShowList from  '../store/actionCreator/showList/getShowList'
import {SwipeableDrawer} from '@material-ui/core'
import  { Button}  from  '@material-ui/core'
import { Drawer } from '@material-ui/core';
import Axios from 'axios';
class navigation
 extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            bool:false,
            city:[]
          }
    }
    render() { 
        return (
        <div>
            <header className={nav.top}>
                <div onClick={()=>this.props.history.go(-1)} className={nav.top_left}>
                    <img src={leftIcon} alt=""/>
                </div>
                <span>演出</span>
                <div className={nav.top_right}>
                    <img src={menu} alt=""/>
                </div>
            </header>
            <nav className={nav.nav}>
                <div className={nav.slider}>
                    <span className={nav.span}>全部</span>
                    <span>演唱会</span>
                    <span>音乐会</span>
                    <span>话剧歌剧</span>
                    <span>儿童亲子</span>
                    <span>音乐剧</span>
                    <span>戏曲综艺</span>
                    <span>展览</span>
                    <span>舞蹈</span>
                    <span>舞蹈芭蕾</span>
                </div>
                <div className={nav.fff}></div>
                   <span style={{width:90}} className={nav.te}  onClick={()=>this.setState({bool:true})}>全国<i><img  width={11} src={address} alt=""/></i></span>
                   <React.Fragment>
                    <Drawer  
                    anchor='right' open={this.state.bool} >
                      <h2>城市</h2>
                      <div className={nav.hidden_box}>
                          <div className={nav.city_content}>
                              {
                                  this.state.city.map(v=>(
                                  <span key={v.id}>{v.name}</span>
                                  ))
                              }
                          </div>
                          <div className={nav.box_bottom}>
                            <div className={nav.button} onClick={()=>this.setState({bool:false})}>重置</div>
                            <div className={nav.te}  onClick={()=>this.setState({bool:false})}>确定</div>
                          </div>
                      </div>
                    </Drawer>
                </React.Fragment>
                   
            </nav>

            <section className={nav.section}> 
                    {
                        this.props.showList.showList.map(v => (
                            <div className={nav.box} key={v.schedular_id}>
                                <div className={nav.img_box}><img src={v.pic} alt="" /></div>
                                <div className={nav.img_bottom}>
                                    <p><img src="https://image.juooo.com/upload/i.png" alt="" /><span>{v.name}</span></p>
                                    <p>{v.start_show_time}{v.show_time_bottom}</p>
                                    {
                                        v.min_price != 0 ?
                                            <p className={nav.text}><span>￥{v.min_price}</span>起</p> : <p className={nav.text}><span>待定</span></p>
                                    }
                                </div>
                            </div>
                        ))
                 }
            </section>
        </div>
        );
    }
    async componentWillMount(){
          console.log(this.props.location.state.id,111111111111111)
          console.log(await getShowList(0,this.props.location.state.id,1),3333333333333)
          this.props.getShowLists(0,this.props.location.state.id,1)
    }
    async componentDidMount(){
          const {data}=await  Axios.get('api/city/city/getCityList?version=6.1.1&referer=2')
           this.setState(
                {
                    city:data.data.city_list
                }
           )
        console.log(this.state.city)

    }
}
 
const  mapStateToProps=(state)=>{
    console.log(state,88888888888888888)
    return  state

}
const  mapDispatchToProps=(dispatch)=>{
    return{
        getShowLists: async(a,b,c)=>{
            dispatch(await getShowList(a,b,c))
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps) (navigation)
;