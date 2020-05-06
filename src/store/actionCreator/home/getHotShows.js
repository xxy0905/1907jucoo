import Axios from "axios";
import actions from  '../../actionType/swipe'
export  default  async function(){
    const {data}=await  Axios.get('api/home/index/getHotsRecommendList?city_id=0&version=6.1.1&referer=2')  
    return{
        type:actions.GET_HOTSHOWS,
        payload:{
             data
        }
    }
}