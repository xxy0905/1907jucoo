import  Home  from  '../views/Home'
import  Wallet  from '../views/Wallet'
import  My  from  '../views/My'
import  Index  from  '../views/Index'
import  Ticket  from  '../views/Ticket'
import  TheatreList  from  '../views/TheatreList'
import  TheatreDetail  from  '../views/TheatreDetail'
export default  [
    {
        path:"/ticket/:id",
        component:Ticket
    },
    {
        path:"/theatre/detail/:id/:vid",
        component:TheatreDetail
    },
    {
        path:'/',
        component:Index,
        childrens:[
           {
                path:"/",
                exact:true,
                component:Home
            },
           {
                path:'/theatre/theatreList',
                component:TheatreList
            },
            {
                path:'https://m.juooo.com/eticket/mine',
                component:Wallet
            },
            {
                path:'/myjuooo/myjuooo',
                component:My
            }, 
        ]
    },
   
]