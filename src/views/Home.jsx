import  React  from  'react'
import  axios from  'axios'
class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return(
            <div>home</div>
        )
    }
    async componentDidMount(){
        const  {data}=await  axios.get('/api/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.1&referer=2')
        console.log(data)
    }
} 
export default Home