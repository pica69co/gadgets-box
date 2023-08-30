import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to='/music'><h3>Music Player</h3></Link>
            <Link to='/weather'><h3>Weather</h3></Link>
            <Link to='/countdown'><h3>Count Down [ Christmas & New Year ]</h3></Link>
            <Link to='/quotes'><h3>Random Daily Quotes</h3></Link>
        </div>
    )
}
export default Home