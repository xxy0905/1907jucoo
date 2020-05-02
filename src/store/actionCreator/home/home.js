import  action  from  '../../actionType/swipe'
import axios from  'axios'
const getdate= async function(){
    const {data}=await axios.get('/api/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2')
    return{
        type:action.GET_SWIPE,
        payload:{
            data
        }
    }

}
export default getdate