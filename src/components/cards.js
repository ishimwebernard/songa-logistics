import React from 'react'
import Plane from '../assets/plane.png';
import Button from './button.js'
import Ocean from '../assets/ocean.png'
import Land from '../assets/land.png'
import Warehousing from '../assets/warehousing.png'

const Card = ({image, title, content, route}) =>{
    return (
        <div className='px-24 flex space-x-4' data-aos="fade-up">
            <img src={image} className='w-2/5' alt="rty" />
            <div className='items-center h-full justify-center mt-12 '>
                <p className=' font-header text-6xl text-gray-700'>{title}</p>
                <p className='text-gray-600 text-md mt-4'>{content}</p>
                <div className='py-12'>
                <Button text='Read More'/>
                </div>
            </div>
        </div>
    )
}

const CardReverse = ({image, title, content, route}) =>{
    return (
        <div className='px-24 flex space-x-4' data-aos="fade-up">
                <div className='items-center h-full justify-center mt-12 '>
                <p className=' font-header text-6xl text-gray-700'>{title}</p>
                <p className='text-gray-600 text-md mt-4'>{content}</p>
                <div className='py-12'>
                <Button text='Read More'/>
                </div>
            </div>
            <img src={image} className='w-2/5' alt="rty" />
        
        </div>
    )
}

export default function Cards() {
    return (
        <div className='mt-16'>
            <Card image={Plane} title='Air Freight' content='Air Transport offers the fatest most and direct connection to point destination for your shipment. Air Freight is an essential component to any international logistics network. We can offer you choice and flexibility over the type of service available when sending freight by air.'/>
            <CardReverse image={Ocean} title='Ocean Freight'content="Vessels of various specifications help to move volume of cargo accross the world ' s seas and oceans. Ocean freight is far and away the most popular option for shipping goods internationally." />
            <Card image={Land} title='Land Freight' content='We offer land transport and tailor made distribution services across the entire East African region.'/>
            <CardReverse image={Warehousing} title='Warehousing' content='Importer or exporter, manufacturer, agriculturalist, machandise trader, antique specialist, we have a storage solution for you.'/>
        </div>
    )
}
