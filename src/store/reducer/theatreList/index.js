import  theatreListType from '../../actionType/theatreList'
import  theatreListInit  from  '../../state/theatreList'
export default  function (state={theatreListInit},{type,payload}){
    console.log(payload)
    state = JSON.parse(JSON.stringify(state));
     if(type===theatreListType.GET_THEATRELIST){
        //  state:payload
     }
     return state
}