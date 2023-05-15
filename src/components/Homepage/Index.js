import React from 'react';
import Header from './HomepageElements/Header'
import HomeList from "./HomepageElements/HomeList"
import Testimonial from "./HomepageElements/Testimonial"
import Appss from "./HomepageElements/Appss"
import Features from "./HomepageElements/Features"
import NeedHelp from "./HomepageElements/NeedHelp"
import MarketNews from "./HomepageElements/MarketNews"
import Trade from "./HomepageElements/Trade"
import Footer from '../Common/Footer'
import Nav from "../Common/Nav"
const Index = () => {
    return (
        <div>
            <Nav />
            <Header />
            <HomeList />
           
            <Footer />
        </div>
    )
}

export default Index;
