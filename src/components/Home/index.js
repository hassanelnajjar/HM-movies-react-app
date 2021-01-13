import {Link} from 'react-router-dom'
import './style.css'

export default function Home(){
  return (
    <div className='home-container'>
      <h1 className='home-header'>Welcome To Your Movies Watch list</h1>
      <div className='home-buttons'>
        <button className='home-login-button' type='button'>
          <Link className='home-button-link' to='/login'>
            Login
          </Link>
        </button>
        <button className='home-signup-button' type='button'>
          <Link className='home-button-link' to='/signup'>
            Signup
          </Link>
        </button>
      </div>
    </div>
	);
}