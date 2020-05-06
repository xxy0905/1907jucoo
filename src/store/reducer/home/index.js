import  action from '../../actionType/swipe/index'
import  data  from  '../../state/home'
export default  function (state=data,{type,payload}){
    
     state=JSON.parse(JSON.stringify(state))
     if(type===action.GET_SWIPE){
         state.classify=payload.data.data||[]
     }
     if(type===action.GET_THETOUR){
          state.theTour=payload.data||[]
     }
     if(type===action.GET_RECOMMENDED_DATA){
          state.recommened=payload.data.data.list||[]
     }
     return  state
}