import  React  from  'react'
import  axios from  'axios'
import  home  from  '../assets/css/home/home.module.scss'
import  Swipe from  '../components/home/Swipe'
import  Swipe2  from  '../components/home/Swipe2'
import  HotSlider  from '../components/home/Hotslider'
import  action  from  '../store/actionType/swipe'
import  getHomeData from  '../store/actionCreator/home/home'
import {
    connect
  } from  'react-redux'
import  img1 from  '../assets/img/home/biao.png'
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            v:[1,2,3]
        }
    }
    render(){
        return(
            <div>
                  <div className={home.top}>
                        <div className={home.left}>s
                                <span>全国</span>
                        </div>
                      <div className={home.center}>
                            <i>图片</i>
                            <span>搜索热门演出</span>
                      </div>
                      <div className={home.right}>
                         <i>图</i>
                      </div>
                  </div>
                  <div className={home.swipe}>
                      <Swipe></Swipe>
                  </div>
                <section className={home.content}>
                    <div className={home.top}>
                            {
                            this.props.data.classify_list.map(v=>(
                                <div className={home.menu} key={v.id}>
                                    <a href='/ticket'>
                                        <div className={home.menuUi}>
                                            <img src={v.pic} alt=""/>
                                        </div>
                                        <div className={home.menuText}>{v.name}</div>
                                    </a>
                                </div>
                            ))
                            } 
                    </div>
                    <div className={home.section_center}>
                            <a href="">
                                <div className={home.section_center_top}>
                                        <div className={home.top_left}>
                                                <i><img className={home.img} src={img1} alt=""/></i>
                                                <span>会员专享折扣</span>
                                        </div>
                                        <div className={home.top_right}>
                                            <span>99元/年</span>
                                        </div>
                                </div>
                            </a>
                        <div className={home.section_center_bottom}>
                            <Swipe2></Swipe2>
                        </div>
                    </div>
                    <div className={home.section_bottom}>
                        <img src="https://image.juooo.com/group1/M00/03/96/rAoKmV6W4RyAdkouAAJa2-GtD74165.png" alt=""/>
                    </div>
                </section>
                <div className={home.hotslider}>
                        <div className={home.hotslider_top}>
                            <h3>热门演出</h3>
                            <div>
                                <span>全部</span>
                                <i>> </i>
                            </div>
                        </div>
                        <HotSlider></HotSlider>
                    </div>
            
            <div className={home.cheng}></div>
            </div>
        )
    }
    async componentDidMount(){
        const  data=await getHomeData()
        this.props.getswipe()
        console.log(data,2222222)
        // this.setState({
        //     v:this.props
        // })
    //     const  {data}=await  axios.get('/api/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2')
    //     console.log(data)
    }
} 
        const mapStateToProps=(state)=>{
            const  data =state.home.state
            console.log(data,521521)
            return {data}
        }
        const  mapDispatchToProps=(dispatch)=>{
            return{
                getswipe:async()=>{
                    dispatch(await getHomeData())
                }
            } 
        }
export default  connect(mapStateToProps ,mapDispatchToProps)(Home)