import  theatreListType  from  '../../actionType/theatreList'
export function getTheatreList(payload){
    return {
        type:theatreListType.GET_THEATRELIST,
        payload
    }
}