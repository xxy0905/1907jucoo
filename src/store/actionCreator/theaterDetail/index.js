import  theaterDetailType  from  '../../actionType/theaterDetail'
import axios from  'axios'
export function getShowList(payload) {
    return {
        type:"GET_SHOW_LIST",
        payload
    }
}
export function getHe(payload) {
    return {
        type:"GET_HEADER",
        payload
    }
}
export default {
    getShow(){
        return async (dispatch)=> {
            const {data}=await axios.get("/api/Show/Search/getShowList?page=1&venue_id=2400,2419&version=6.1.1&referer=2")
            dispatch(getShowList(data.data))
            // console.log(9999999999,data.data)
        }
        
    },
    getH(id){
        return async (dispatch)=> {
            const {data}=await axios.get('/api/theatre/index/getTheatreInfo?theatre_id='+id+'&longitude=&latitude=&version=6.1.1&referer=2')
            dispatch(getHe(data.data))
            // console.log(9999999999,data.data)
        }
        
    }
}