import  ticketType from '../../actionType/ticket'
import  ticketInit  from  '../../state/ticket'
export default  function (state=ticketInit,{type,payload}){
    // console.log(1111,payload)
    state = JSON.parse(JSON.stringify(state));
     if(type===ticketType.GET_TICKET){
         state.desc = payload.static_data.show_desc.desc;
         state.important_note = payload.static_data.important_note;
         state.support=payload.static_data.support.list;
         state.price_range=payload.static_data.price_range
         state.share_pic=payload.share_data.share_pic;
         state.cate_parent_id=payload.static_data.cate_parent_id;
         state.city_id=payload.static_data.city.city_id;
         state.schedular_id=payload.static_data.schedular_id
         state.share_title=payload.share_data.share_title
         state.show_time_start=payload.static_data.show_time_data.show_time_start;
         state.show_time_end=payload.static_data.show_time_data.show_time_end;
         state.city_name = payload.static_data.city.city_name;
         state.venue_address=payload.static_data.venue.venue_address;
         state.venue_name=payload.static_data.venue.venue_name;
         state.list=payload.static_data.show_notice.list
         
     }
     if(type === ticketType.GET_RECOMMEND){
        state.showList = payload.list;
     }
     return state
}