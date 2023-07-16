import React, { useEffect } from 'react'
import './Banner.css'
import { cleanup } from '@testing-library/react'
import axios from '../../axios'
import {API_KEY} from '../../constants/constants'

function Banner() {
    useEffect(() => {
       axios.get(`trending/all/week?api_key={API_KEY}&language=en-US`).then((Response)=>{
        console.log(Response.data)
       })
    },[])
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Movie name</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>Alarmism is excessive or exaggerated alarm of a real or imagined threat. Alarmism connotes attempts to excite fears or giving warnings of great danger in a manner that is amplified, overemphasized or unwarranted</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
