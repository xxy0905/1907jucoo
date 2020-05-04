import swipe from "../../../actionType/swipe";
export  default  function(state={},{type,payload}){
    state =JSON.parse(JSON.stringify(state))
    if(type===swipe.GET_THETOUR){
        state=payload.data
    }
    return  {
        state
    }
}