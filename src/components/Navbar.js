import navbarcss from '../style/navbar.css'
import indexcss from '../index.css'
import logo1 from '../images/logo1.png'

export default function Navbar(){

    return(
        <>
        <div className='nav'>
            <img src={require('../images/logo1.png')} />
            <div className='test1'>
                <a className='button' href='https://discord.com/api/oauth2/authorize?client_id=997577664405700829&permissions=8&scope=bot'>
                    Try it out now
                </a>
            </div>
            
        </div>
        
       
        </>
    )
}