import  theaterDetailType from '../../actionType/theaterDetail'
import  theater_detail  from  '../../state/theaterDetail'
export default  function (state=theater_detail,{type,payload}){
    // console.log(payload)
    state = JSON.parse(JSON.stringify(state));
     if(type===theaterDetailType.GET_SHOW_LIST){
        state.theater_detail = payload.list;
     }
     if(type === theaterDetailType.GET_HEADER){
        state.sch_num = payload.sch_num;
        state.city_name=payload.city_name;
        state.theatre_pic=payload.theatre_pic;
        state.theatre_name=payload.theatre_name;
        state.theatre_address=payload.theatre_address;
        state.venue_ids=payload.venue_ids
        
     }
     return state
}