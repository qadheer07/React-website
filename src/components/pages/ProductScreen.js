import React from 'react'
import RubyData  from './RubiesData'
import SapphireData from './SapphiresData'
import EmeraldData from './EmeraldsData'
import Iframe from 'react-iframe'
import TransitionsModal from './Popup'
import './ProductScreen.css'
import Hotspot from '../Hotspot'
import { Button } from '../Button'

function ProductScreen(props) {

    let data = (RubyData.products).concat(SapphireData.products, EmeraldData.products)

    const product = data.find(x => x.__id === props.match.params.id);
    return (
        <div className='product-screen-container'>
            <div className='product-screen-heading'>
                <h1>{product.name}</h1>
                <p> {product.description}</p>
                <p> Heated <i style={{color:'#ff6800'}} className="fab fa-gripfire"></i> </p>
                <p> {product.price} </p>
            </div>
            <video src='/videos/ruby001crop_2.mp4' width='100%' height='100%' autoPlay muted loop playsInline  type='video/mp4'></video>
            <div className='inclusions-container' >
                <Hotspot mainImage="/images/hotspot-image.jpg" hotspots= {
                        [
                        { x: 50, y: 60, title:'A Rutile Needle inclusion', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit Velit, natus',
                            src: '/images/rutile-needles-inclusions.jpg' },
                        { x: 30, y: 30, title:'A Rutile Needle inclusion', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit Velit, natus',
                            src: '/images/feather-crack-inclusions.jpg' }
                    ]
                }/>
                <Hotspot mainImage="/images/hotspot-image2.jpg" hotspots= {
                        [
                        { x: 45, y: 60, title:'A Rutile Needle inclusion', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit Velit, natus',
                            src: '/images/rutile-needles-inclusions.jpg' },
                        { x: 30, y: 30, title:'A Rutile Needle inclusion', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit Velit, natus',
                            src: '/images/feather-crack-inclusions.jpg' }
                    ]
                }/>
            </div>
            <div className='products-buttons'>
                <TransitionsModal button='View Certificate' url='/images/cert.jpg' />
                <Button buttonSize='btn--large' buttonStyle='btn--third'> {'\u00a0\u00a0\u00a0\u00a0'} Buy Now {'\u00a0\u00a0\u00a0\u00a0'} </Button>
                <TransitionsModal button={`\u00a0\u00a0\u00a0\u00a0Negotiate\u00a0\u00a0\u00a0\u00a0`} link={true} />
                
            </div>
            <Iframe width="100%" height="600px" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" url="https://api.cappasity.com/api/player/5fb53bdd-6f6c-436c-b7b7-3b8cb7c9d2d2/embedded?autorun=1&closebutton=0&logo=0&analytics=1&uipadx=1&uipady=1&enablestoreurl=0&storeurl=&hidehints=0&autorotate=1&autorotatetime=10&autorotatedelay=0&autorotatedir=1&hidefullscreen=0&hideautorotateopt=0&hidesettingsbtn=0&enableimagezoom=1&zoomquality=1&hidezoomopt=0&arbutton=1" />
         </div>   
    )
}

export default ProductScreen
