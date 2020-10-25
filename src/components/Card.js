import React from 'react'
import './Card.css'
import { Button } from './Button'

function Card({
    lightBg, img, alt, headline, description, buttonLabel, lightText, goto, white
}) {
    return (

        <div className={lightBg ? 'card-section' : 'card-section darkBg'}>
            <div className={lightBg ? (white ? 'card-container whiteBg' : 'card-container') : 'card-container darkBg'}>
                
                        <div className="text-wrapper">
                            <h2 className={lightText ? 'headline' : 'headline dark'}>{headline} </h2>
                            <p className={lightText ? 'description' : 'description dark'}>{description}</p>
                            
                                <Button to={goto} buttonStyle={lightText ? 'btn--outline' : 'btn--primary'} buttonSize='btn--large'>{buttonLabel}<i class="fas fa-chevron-right"></i></Button>
                            
                        </div>
                    
                    
                        <div className="img-wrapper">
                            <img src={img} alt={alt} className='card-image'/>
                        </div>
                    
                
            
            </div>

            
        </div>
    )
}

export default Card
