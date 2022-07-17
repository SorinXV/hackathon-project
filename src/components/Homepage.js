import hompagecss from '../style/homepage.css'

export default function Homepage(){
    return(

        <>
        
        <div className='test'>
       
            <div className='container'>
                <h1 className='title '>
                Hammer
                <br></br> 
                <span className='flex'><img className='image' src={require('../images/image.png')} />Ban<span className='color-purple'>ner</span> </span>
                
                </h1>
                <p className='paragraph '>Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book. It has 
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially.<br></br>
            Find out more <span><a href="#" className='color-purple'>here</a></span></p>
            
                <a className='paragraph footer'>
                ©HammerBanner2022 all rights reserved.
                </a>
                
            </div>
        <img className='background2' src={require('../images/secondbg.png')} />
        <img className='background' src={require('../images/background.png')} />
        
        </div>
        
        </>

    )
}