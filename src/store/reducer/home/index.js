import  action from '../../actionType/swipe/index'
import  swipe  from  '../../state/home'
export default  function (state={swipe},{type,payload}){
    console.log(swipe)
     if(type===action.type){
         console.log('fsfsf')
     }
     return {
         name:state
     }
}