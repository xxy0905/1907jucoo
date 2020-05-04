import  action from '../../actionType/swipe/index'
import  data  from  '../../state/home'
export default  function (state=data,{type,payload}){
    state=JSON.parse(JSON.stringify(state))
    if(type===action.GET_SWIPE){
        console.log(payload.data.data.classify_list,1111111)
         state.data=payload.data.data
        }
        return{
             data:state.data
        }
}