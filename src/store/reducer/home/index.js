import  action from '../../actionType/swipe/index'
import  data  from  '../../state/home'
export default  function (state={data},{type,payload}){
    console.log(data,type)
    if(type===action.GET_SWIPE){
        console.log(payload.data.data.classify_list,1111111)
         console.log('fsfsf');
         state=payload.data.data
         return{
             state
         }
     }
     else return{
        // state:state.data.data
     }
}