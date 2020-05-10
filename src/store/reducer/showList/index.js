import  actions from '../../actionType/showList'
import showList  from '../../state/showList/index'
export default function(state=showList,{type,payload}){
    if(type===actions.GET_SHOW_LIST){
        // console.log(payload.data.data.list,5555555555555)
        state.showList=payload.data.data.list
    }
    return state
}