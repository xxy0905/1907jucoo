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
    getDetail(schedular_id=110514){
        return  async (dispatch)=> {
            const {data}=await axios.get('/api/Schedule/Schedule/getScheduleInfo?schedular_id='+schedular_id+'&version=6.1.1&referer=2')
            dispatch(getTicket(data.data))
        }
        
    },
    getShowList(category=91,city_id=1){
        return  async (dispatch)=> {
            const {data}=await axios.get('/api/Show/Search/getShowList?category='+category+'&city_id='+city_id+'&version=6.1.1&referer=2')
            dispatch(getRecommend(data.data))
        }
    }
    
}