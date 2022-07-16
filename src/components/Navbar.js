import navbarcss from '../style/navbar.css'
import indexcss from '../index.css'
import logo1 from '../images/logo1.png'

export default function Navbar(){

    return(
        <>
        <div className='nav'>
            <img className='test' src={require('../images/logo1.png')} />
            <a className='button' href='#'>
                Get bot
            </a>
        </div>
        
       
        </>
    )
}