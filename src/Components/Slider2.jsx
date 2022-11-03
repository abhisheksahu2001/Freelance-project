import React from 'react'
import hero_1 from '../Static/hero_1.png'
import hero_2 from '../Static/hero_2.png'
import hero_3 from '../Static/hero_3.png'
import hero_4 from '../Static/hero_4.png'
import hero_5 from '../Static/hero_5.png'
import hero_7 from '../Static/hero_7.png'
import hero_8 from '../Static/hero_8.png'
import hero_9 from '../Static/hero_9.png'
import './slider2.css'

export const Slider2 = () => {
    return (
        <>
            <div className="slider">
                <div className="slide_track">
                    <div className="slide">
                        <img className="slide-img" src={hero_1} alt="" />
                    </div>
                    <div className="slide">
                        <img className="slide-img" src={hero_2} alt="" />
                    </div>
                    <div className="slide">
                        <img className="slide-img" src={hero_3} alt="" />
                    </div>
                    <div className="slide">
                        <img className="slide-img" src={hero_4} alt="" />
                    </div>
                    <div className="slide">
                        <img className="slide-img" src={hero_5} alt="" />
                    </div>
                    <div className="slide">
                        <img className="slide-img" src={hero_7} alt="" />
                    </div>
                    <div className="slide">
                        <img className="slide-img" src={hero_8} alt="" />
                    </div>
                    <div className="slide">
                        <img className="slide-img" src={hero_9} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Slider2