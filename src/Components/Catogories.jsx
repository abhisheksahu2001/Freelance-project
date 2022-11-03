import React from 'react'
import './Categories.css'
import air_conditioner from '../Static/air-conditioner-svgrepo-com (1).svg'
import dish from '../Static/dishwasher-svgrepo-com.svg'
import laptop from '../Static/laptop-svgrepo-com.svg'
import refrigerator from '../Static/refrigerator-fridge-svgrepo-com.svg'
import tv from '../Static/television-svgrepo-com.svg'
import washing from '../Static/washing-machine-svgrepo-com.svg'
import watch from '../Static/watch-svgrepo-com.svg'
import tools from '../Static/tools-svgrepo-com.svg'


const Catogories = () => {

    return (
        <>
            <section className="categories_box">
                <div className='categories_container'>
                    <div>
                        <div className='cate'>
                            <div className='categories-Title'>categories</div>

                        </div>
                        <div className='categories-Text'>100s of product present in our store</div>
                    </div>

                    <div className='grid'>
                        <div className='grid-items'>
                            <span className='grid-box-flex'>
                                <img className="grid-img" src={air_conditioner} />
                                <div className='grid-flex'>
                                    <h2>Air Conditioners</h2>
                                    <p> Buy AC from top brands</p>
                                </div>
                            </span>
                        </div>
                        <div className='grid-items'>
                            <span className='grid-box-flex'>
                                <img className="grid-img" src={dish} />
                                <div className='grid-flex'>
                                    <h2>Dishwashers</h2>
                                    <p> Buy Dishwashers from top brands</p>
                                </div>
                            </span>
                        </div>
                        <div className='grid-items'>
                            <span className='grid-box-flex'>
                                <img className="grid-img" src={laptop} />
                                <div className='grid-flex'>
                                    <h2>Laptops</h2>
                                    <p>Search through latest laptops</p>
                                </div>
                            </span>
                        </div>
                        <div className='grid-items'>
                            <span className='grid-box-flex'>
                                <img className="grid-img" src={refrigerator} />
                                <div className='grid-flex'>
                                    <h2>Refrigerators</h2>
                                    <p>best deals on refrigerators</p>
                                </div>
                            </span>
                        </div>
                        <div className='grid-items'>
                            <span className='grid-box-flex'>
                                <img className="grid-img" src={tv} />
                                <div className='grid-flex'>
                                    <h2>Television</h2>
                                    <p>Sony, Samsung, Mi tv</p>
                                </div>
                            </span>
                        </div>
                        <div className='grid-items'>
                            <span className='grid-box-flex'>
                                <img className="grid-img" src={washing} />
                                <div className='grid-flex'>
                                    <h2>Washing Machine</h2>
                                    <p>Get Washing Machines</p>
                                </div>
                            </span>
                        </div>
                        <div className='grid-items'>
                            <span className='grid-box-flex'>
                                <img className="grid-img" src={watch} />
                                <div className='grid-flex'>
                                    <h2>Watch</h2>
                                    <p>Get best deals on watches</p>
                                </div>
                            </span>
                        </div>
                        <div className='grid-items'>
                            <span className='grid-box-flex'>
                                <img className="grid-img" src={tools} />
                                <div className='grid-flex'>
                                    <h2>Accessories</h2>
                                    <p>Looking for Accessories</p>
                                </div>
                            </span>
                        </div>


                    </div>

                </div>
            </section>
        </>
    )
}

export default Catogories