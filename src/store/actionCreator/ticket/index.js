import  ticketType  from  '../../actionType/ticket'
import axios from  'axios'
export function getTicket(payload) {
    return {
        type:ticketType.GET_TICKET,
        payload
    }
}
export function getRecommend(payload){
    return {
        type:ticketType.GET_RECOMMEND,
        payload
    }
}
export default {
    getDetail(schedular_id=111609){
        return  async (dispatch)=> {
            // console.log(11111,this.props);
            const {data}=await axios.get('/api/Schedule/Schedule/getScheduleInfo?schedular_id='+schedular_id+'&version=6.1.1&referer=2')
            dispatch(getTicket(data.data))
            // console.log(333333,data)  
        }
        
    },
    getShowList(){
        return  async (dispatch)=> {
            // console.log(11111,this.props);
            const {data}=await axios.get('/api/Show/Search/getShowList?category=37&city_id=36&version=6.1.1&referer=2')
            dispatch(getRecommend(data.data))
            console.log(333333,data)  
        }
    }
    
}