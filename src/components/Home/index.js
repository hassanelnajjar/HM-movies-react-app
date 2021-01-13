import {Link} from 'react-router-dom'
import './style.css'

export default function Home(){
  return (
    <div className='home-container'>
      <h1 className='home-header'>Welcome To Your Movies Watch list</h1>
      <div className='home-buttons'>
        <Link className='home-login-button home-button-link' to='/login'>
          Login
        </Link>
        <Link className='home-login-button home-button-link' to='/signup'>
          Signup
        </Link>
      </div>
    </div>
	);
}