import React from 'react'
import Navbar from './Components/Navbar';
import Notice from './Components/Notice';
import Slider2 from './Components/Slider2';
import Footer from './Components/Footer'
import Categories from './Components/Catogories';
import Steps from './Components/Steps';
import Logoslider from './Components/Logoslider';
import Whatsapp from './Components/Whatsapp';
import CategoriesPage from './Components/CategoriesPage';

const Home = () => {
    return (
        <div>
            <Notice />
            <Navbar />
            <Slider2 />
            <Categories />
            <Steps />
            <Logoslider />
            <Footer />
            <Whatsapp />
        </div>
    )
}

export default Home;
