import React from 'react'
import woman from '../Static/woman.png'
import bells from '../Static/bells.png'
import mobile from '../Static/mobile.png'
import "./steps.css"
const Steps = () => {
    return (
        <>
            <section className='step-container'>
                <div className='set-box'>
                    <div className='step-title'>
                        <h1>start trading in 3 simple steps</h1>
                    </div>
                    <div className='step-cards-section'>
                        <div className='step-cards'>
                            <img className="card-img" src={woman} />
                            <h2 className='card-heading'>create an account</h2>
                            <p className='card-disc'> register using mobile number</p>
                        </div>
                        <div className='step-cards'>
                            <div className='border'></div>
                        </div>
                        <div className='step-cards'>
                            <img className="card-img" src={mobile} />
                            <h2 className='card-heading'>create an account</h2>
                            <p className='card-disc'> register using mobile number</p>
                        </div>
                        <div className='border'></div>

                        <div className='step-cards'>
                            <img className="card-img" src={bells} />
                            <h2 className='card-heading'>create an account</h2>
                            <p className='card-disc'> register using mobile number</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Steps