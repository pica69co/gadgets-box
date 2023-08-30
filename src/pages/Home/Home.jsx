import { Link } from 'react-router-dom'
import './Home.css'

const Links = [
//    {
//     name: 'Home',
//     path:'/',
//   },
  {
    name: 'Music Player',
    path: '/music'
  },
  {
    name: 'Weather',
    path: '/weather',
  },
  {
    name: 'Count Down [ Christmas & New Year ]',
    path: '/countdown',
  },
  {
    name: 'Random Daily Quotes',
    path: '/quotes',
  }
]

const Home = () => {
    return (
        <div className='container-home'>
            { Links.map((link, index) => (
            <div key={index} className='link-container'>
            <Link to={link.path} className='link'><h3 >{link.name} </h3></Link>
            </div>
            )) 
            }
        </div>
    )
}
export default Home