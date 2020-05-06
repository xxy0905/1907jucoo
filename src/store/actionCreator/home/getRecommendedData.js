import Axios from "axios";
import  action from  '../../actionType/swipe/index'
export default async function(page=1){
     const  {data}=await  Axios.get(`/api/Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&start_time=&page=${page}&referer_type=index&version=6.1.1&referer=2`)
     return{
         type:action.GET_RECOMMENDED_DATA,
         payload:{
             data
         }
     }
}