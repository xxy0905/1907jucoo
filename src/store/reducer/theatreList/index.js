import  theatreListType from '../../actionType/theatreList'
import  theatre_list  from  '../../state/theatreList'
export default  function (state=theatre_list,{type,payload}){
    // console.log(payload)
    state = JSON.parse(JSON.stringify(state));
     if(type===theatreListType.GET_THEATRELIST){
        //  state.theatreListInit=payload.theatreListInit;
        state.theatre_list = payload.theatre_list;

     }
     return state
}