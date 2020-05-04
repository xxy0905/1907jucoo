import  {
    combineReducers
}  from  'redux'
import  home from  './home'
import  ticket from  './ticket'
import theTour from  './home/theTour'
export default  combineReducers({
        home,
        ticket,
        theTour
        
})