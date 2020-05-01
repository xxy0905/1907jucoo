import  Home  from  '../views/Home'
import  Wallet  from '../views/Wallet'
import  Cinema from  '../views/Cinema'
import  My  from  '../views/My'
import  Index  from  '../views/Index'
import  Ticket  from  '../views/Ticket'
export default  [
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
                path:'/cinema',
                component:Cinema
            },
            {
                path:'/wallet',
                component:Wallet
            },
            {
                path:'/my',
                component:My
            }, 
        ]
    },
    {
        path:"/ticket",
        component:Ticket
    }
]