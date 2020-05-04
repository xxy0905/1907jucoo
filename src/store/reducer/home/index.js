import  action from '../../actionType/swipe/index'
import  data  from  '../../state/home'
export default  function (state=data,{type,payload}){
    state=JSON.parse(JSON.stringify(state))
    if(type===action.GET_SWIPE){
         state.data=payload.data.data
        }
        return{
             data:state.data
        }
}