import hompagecss from '../style/homepage.css'

export default function Homepage(){
    return(

        <>
        
        <div className='test'>
       
            <div className='container'>
                <h1 className='title '>
                Hammer
                <br></br> 
                <span className='flex'><img className='logo' src={require('../images/image.png')} alt="secondary-logo" />Ban<span className='color-purple'>ner</span> </span>
                
                </h1>
                <p className='paragraph '>Hammer Banner is a discord bot built for large scale servers. It’s purpose is to ease the duty of mods
                by detecting and deleting spam links and innapropriate content. Currently the bot is still in development <br></br>
                Find out more <span><a href="https://github.com/sikethedev/scammer-hammer" className='color-purple'>on our github repository</a></span></p>
            
                <a className='paragraph footer'>
                    <span className='color-purple'>
                    ©HammerBanner2022   
                    </span>
                , all rights reserved.
                </a>
                
            </div>
        <img className='background2' src={require('../images/secondbg.png')} alt=""/>
        <img className='background' src={require('../images/background.png')} />
        
        </div>
        
        </>

    )
}