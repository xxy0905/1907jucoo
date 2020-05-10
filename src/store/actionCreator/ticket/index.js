import  ticketType  from  '../../actionType/ticket'
import axios from  'axios'
export function getTicket(payload) {
    return {
        type:ticketType.GET_TICKET,
        payload
    }
}
export default {
    getDetail(schedular_id){
        return  async (dispatch)=> {
            const {data}=await axios.get('/api/Schedule/Schedule/getScheduleInfo?schedular_id='+schedular_id+'&version=6.1.1&referer=2')
            dispatch(getTicket(data.data))
        }
        
    }
    
}