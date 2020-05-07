import  Home  from  '../views/Home'
import  Wallet  from '../views/Wallet'
import  My  from  '../views/My'
import  Index  from  '../views/Index'
import  Ticket  from  '../views/Ticket'
import  TheatreList  from  '../views/TheatreList'
export default  [
    {
        path:"/ticket/:id",
        component:Ticket
    },
    {
        path:"/theatreList",
        component:TheatreList
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