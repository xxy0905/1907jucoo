import Axios from "axios"
import  actions from  '../../actionType/showList'
export default  async function(city_id=0,category=35,page=1){
    const {data}=await  Axios.get('https://api.juooo.com/Show/Search/getShowList',{params:{
        city_id,
        category,
        page,
    }})
    console.log(data,444444444444)
    return{
        type:actions.GET_SHOW_LIST,
        payload:{
            data
        }
    }
}