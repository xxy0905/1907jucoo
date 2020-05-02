import  React  from  'react'
import  axios from  'axios'
import  home  from  '../assets/home.module.scss'
import  Swipe from  '../components/home/Swipe'
import  action  from  '../store/actionType/swipe'
import  getHomeData from  '../store/actionCreator/home/home'
import {
    connect
  } from  'react-redux'
class Home extends React.Component{
    constructor(props){
        super(props)
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
            </div>
        )
    }
    async componentDidMount(){
        const  data=await getHomeData()
        this.props.getswipe()
        console.log(this.props)
    //     const  {data}=await  axios.get('/api/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2')
    //     console.log(data)
    }
} 
        const mapStateToProps=(state)=>{
            console.log(state)
            return state
        }
        const  mapDispatchToProps=(dispatch)=>{
            return{
                getswipe:async()=>{
                    dispatch(await getHomeData())
                }
            } 
        }
export default  connect(mapStateToProps ,mapDispatchToProps)(Home)