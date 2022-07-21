import banner from '../assets/banner.jpg';
import '../styles/Home.css'
import {Button} from 'react-bootstrap';

function Home(){
return(
    <div className='home' style={{ backgroundImage: `url(${banner})` }}>
        <div className='headerContainer'>
            <h1>Order Your Food Now</h1>
            <p>Here you can order food as much as you want!</p>
            <Button variant='warning' size='lg' href='/catalogue'>Click Here to Order!</Button>{' '}
        </div>
    </div>
    
) 
}

export default Home;