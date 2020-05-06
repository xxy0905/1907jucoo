import  React  from  'react'
import  home  from  '../assets/css/home/home.module.scss'
import  Swipe from  '../components/home/Swipe'
import  Swipe2  from  '../components/home/Swipe2'
import  HotSlider  from '../components/home/Hotslider'
import  getHomeData from  '../store/actionCreator/home/home'
import  Tittle  from  '../components/common/Tittle'
import  getRecommendedData  from  '../store/actionCreator/home/getRecommendedData'
import getHotShow from '../store/actionCreator/home/getHotShows'
import {
    connect
  } from  'react-redux'
import  img1 from  '../assets/img/home/biao.png'
import  date  from  '../assets/img/home/icon/日历.png'
import  serach  from  '../assets/img/home/icon/搜索.png'
import  address  from  '../assets/img/home/icon/地址.png'
import TheTour from '../components/home/TheTour'
import getTheTourData from '../store/actionCreator/home/commones/theTour'
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            listHeight:0,
            listPage:1,
            hasMore: true,// 判断接口是否还有数据，通过接口设置
            dataList:[],
            leftData:[],
            rightData:[],
        }
    }
    async handleScroll(){
        console.log('jinlaiele')
        const  {hasMore}=this.state
        if(!hasMore){
            return
        }
        // console.log(this.body.offsetHeight-window.pageYOffset-window.innerHeight)
        if(document.body.offsetHeight-window.pageYOffset-window.innerHeight<=1000){
            console.log('keyi qingqiule')
            await this.setState({
                hasMore:false
            })
            await this.setState({
                listPage:++this.state.listPage,
            })
            const  data=await  getRecommendedData(this.state.listPage)
            const arr=data.payload.data.data.list  
            console.log(arr)
            await this.setState({
                dataList:[
                    ...this.state.dataList,
                    ...arr,
                ]
            })
            this.getFlowData(this.state.dataList)
            await this.setState({
                hasMore:true
            })   
        }else{
            return false;
        }
    }
    
    getFlowData(data){
        let  leftbox=[]
        let   rightbox=[];
        data.forEach((element,i)=> {
             if(i%2===0){
                 leftbox.push(element)
             }
             else{
                rightbox.push(element)
            }
        });
        this.setState({
            leftData:leftbox,
            rightData:rightbox
        })
    }


    render(){
        // console.log(this.state.dataList)
        return(
            <div ref={ref=>this.body=ref}> 
            <div className={home.navCheng}></div>
                 <div className={home.navtop}>
                       <div className={home.left}>
                               <span><img src={address} style={{width:20}} alt=""/></span>
                       </div>
                     <div className={home.center}>
                           <i><img src={serach}  style={{width:20}} alt=""/></i>
                           <span>搜索热门演出</span>
                     </div>
                     <div className={home.right}>
                        <i><img src={date} style={{width:20}} alt=""/></i>
                     </div>
                 </div>
                 
               {/* 广告轮播 */}
                 <div className={home.swipe}>
                     <Swipe></Swipe>
                 </div>
               <section className={home.content}>
                   <div className={home.top}>
                        {
                            this.props.home.classify.classify_list.map(v=>(
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
               
               {/* 热门演出 */}
               <div className={home.hotslider}>
                   <Tittle  p='热门演出' href='www.baidu.com' right='全部'></Tittle>
                   {
                    this.props.home.hots_show_list?
                       <HotSlider data={this.props.home.hots_show_list} ></HotSlider>:<div/>
                    }
               </div>
               {/* 巡回演出 */}
               {this.props.home.theTour[0]?
                 <TheTour she={this.state.v} pro={this.props.home.theTour}></TheTour>:
                 <div/>
               }
               
               {/* 舞台剧 */}
               <div className={home.stage}>
               <Tittle p="舞台剧" href='https://m.juooo.com/show/showsLibrary?cid=0&caid=37'></Tittle>
               <div className={home.stage_content}>
                   <div className={home.stage_content_left}>
                       <img src="https://image.juooo.com//group1/M00/04/21/rAoKNV4Jj32AC3hcAAMtvdtNV6E061.png" alt=""/>
                   </div>
                   <div className={home.stage_content_right}>
                       <p>2020.07.03<span>周五20.00</span></p>
                       <p className={home.stage_content_right_p}>[演出延期]2020第七届城市喜剧荒诞喜剧《解除人生》-深圳站</p>
                       <p>深圳|南山文体中心剧场戏剧小院</p>
                   </div>
               </div>
               {
                    this.props.home.hots_show_list?
                       <HotSlider data={this.props.home.hots_show_list} ></HotSlider>:<div/>
                    }
               </div>
 
 
            {/* 为你推荐 */}
            <div  className={home.recommended}
                ref={ref=>this.header=ref}>
                   <Tittle p='为你推荐' className='header'  ></Tittle>
                   <div  
                    className={home.recommended_content}
                    // style={{height:this.state.listHeight}}
                    >
                        <div className={home.flow_left}>
                        {
                            this.state.leftData.map(v=>(
                                <div key={v.schedular_id}  className={home.listed} >
                                    <div className={home.list_top  } >                              
                                        <img  className={home.picc} src={v.pic} alt=""/>
                                    </div>
                                    <div className={home.list_mm}>
                                        <div className={home.nima}><img className={home.span} src="https://image.juooo.com/upload/i.png" alt=""/>{v.name}</div>
                                        <div className={home.p}>{v.end_show_time}</div>
                                        <div className={home.s}><span>￥{v.min_price}</span>起</div>
                                        <div className={home.v}>
                                            {
                                                v.support_desc.map(s=>
                                                <span key={s}>{s}</span>
                                                )
                                            }
                                        </div> 
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                        <div className={home.flow_right}>
                        {
                            this.state.rightData.map(v=>(
                                <div key={v.schedular_id}  className={home.listed} >
                                    <div className={home.list_top  } >                              
                                        <img  className={home.picc} src={v.pic} alt=""/>
                                    </div>
                                    <div className={home.list_mm}>
                                        <div className={home.nima}><img className={home.span} src="https://image.juooo.com/upload/i.png" alt=""/>{v.name}</div>
                                        <div className={home.p}>{v.end_show_time}</div>
                                        <div className={home.s}><span>￥{v.min_price}</span>起</div>
                                        <div className={home.v}>
                                            {
                                                v.support_desc.map(s=>
                                                <span key={s}>{s}</span>
                                                )
                                            }
                                        </div> 
                                    </div>
                                </div>
                            ))
                        }
    
                        </div>
                        
                </div>
            </div>
 
 
           <div className={home.cheng}>
           </div>
           </div>
        )
    }
    async componentWillMount(){
       
    }
    async componentDidMount(){
        await this.props.getswipe();
        await this.props.getTheTour();
        await this.props.getHotShow();
        await this.props.getRecommended();
        window.addEventListener('scroll',this.handleScroll.bind(this));

    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.scroll())
    }
    scroll(){
        console.log('yichu')
    }
} 
    const mapStateToProps=(state)=>{
        return  state
    }
    const  mapDispatchToProps=(dispatch)=>{
        return{
            getswipe:async()=>{
                dispatch(await getHomeData())
            },
            getTheTour:async()=>{
                dispatch(await getTheTourData())
            },
            getRecommended:async()=>{
                dispatch(await getRecommendedData())
            },
            getHotShow:async ()=>{
                dispatch(await getHotShow())
            }
            
        } 
    }
export default  connect(mapStateToProps ,mapDispatchToProps)(Home)