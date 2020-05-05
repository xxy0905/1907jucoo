import  Home  from  '../views/Home'
import  Wallet  from '../views/Wallet'
import  Cinema from  '../views/Cinema'
import  My  from  '../views/My'
import  Index  from  '../views/Index'
import  Ticket  from  '../views/Ticket'
export default  [
    {
        path:"/ticket",
        component:Ticket
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
                component:Cinema
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