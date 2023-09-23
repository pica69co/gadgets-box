import { Link } from 'react-router-dom'
import './Home.css'
import Background from '../../components/MemoryGame/Background'
import { Links } from '../../dataLinks'

const Home = () => {
    return (
        <div className='container-home'>
            { Links.map((link, index) => (
            <div key={index} className='link-container'>
            <Link to={link.path} className='home-link'><h3 >{link.name} </h3></Link>
            </div>
            )) 
            }
          <Background />  
        </div>
    )
}
export default Home