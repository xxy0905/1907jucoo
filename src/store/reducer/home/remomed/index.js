import  action from '../../../actionType/swipe/index'
import  recommended  from  '../../../state/home'
export default  function (state=recommended,{type,payload}){
    console.log(state,2222222   )
    state=JSON.parse(JSON.stringify(state))
    console.log(recommended,2222222)
    if(type===action.GET_RECOMMENDED_DATA){
         state.recommended=payload.data
        }
        return{
             shuju:state
        }
     
}