import axios  from 'axios'
import  swipe  from  '../../../actionType/swipe'
export  default async function getTheTourData(){
      const  {data}= await axios.get('/api/show/tour/getList?version=6.1.1&referer=2')
      return{
          type:swipe.GET_THETOUR,
          payload:{
              data:data.data.list
          }
      }
}