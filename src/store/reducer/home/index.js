import  action from '../../actionType/swipe/index'
import  swipe  from  '../../state/home'
export default  function (state={swipe},{type,payload}){
    // console.log(swipe,type)
    // console.log(payload,1111111)
     if(type===action.GET_SWIPE){
         console.log('fsfsf');
         state=payload.data
     }
     return {
         state
     }
}