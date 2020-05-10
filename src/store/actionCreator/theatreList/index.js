import  theatreListType  from  '../../actionType/theatreList'
import axios from  'axios'
export function getTheatreList(payload){
    return {
        type:theatreListType.GET_THEATRELIST,
        payload
    }
}
export default {
    getTheatre(){
        return async (dispatch)=> {
            const {data}=await axios.get('/api/theatre/index/getTheatreList?page=1&version=6.1.1&referer=2')
            dispatch(getTheatreList(data.data))
            // console.log(9999999999,data.data)
        }
        
    }
}