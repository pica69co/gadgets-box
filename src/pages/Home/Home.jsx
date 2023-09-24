import { Link } from 'react-router-dom'
import './Home.css'
import Background from '../../components/MemoryGame/Background'
import { Links } from '../../dataLinks'
import { motion } from 'framer-motion'
const Home = () => {
    return (
        <motion.div 
            className='container-home'
            initial={{width:0}}
            animate={{width:'100%'}}
            exit={{x:window.innerWidth, transition:{duration:0.1}}}
            >
            { Links.map((link, index) => (
            <div key={index} className='link-container'>
            <Link to={link.path} className='home-link'><h3 >{link.name} </h3></Link>
            </div>
            )) 
            }
          <Background />  
        </motion.div>
    )
}
export default Home