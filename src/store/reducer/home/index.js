import  action from '../../actionType/swipe/index'
import  data  from  '../../state/home'
export default  function (state=data,{type,payload}){
    
     state=JSON.parse(JSON.stringify(state))
     console.log(payload,22222222222222)
     if(type===action.GET_SWIPE){
         state.classify=payload.data.data
     }
     if(type===action.GET_THETOUR){
          state.theTour=payload.data
     }
     if(type===action.GET_RECOMMENDED_DATA){
          state.recommened=payload.data.data.list
     }
     if(type===action.GET_HOTSHOWS){
          state.hots_show_list=payload.data.data.hots_show_list
     }
     return  state
}