import  {
    combineReducers
}  from  'redux'
import  home from  './home'
import  ticket from  './ticket'
import  theatreList from  './theatreList'
import  theaterDetail from  './theaterDetail'
export default  combineReducers({
        home,
        ticket,
        theatreList,
        theaterDetail
        
        
})