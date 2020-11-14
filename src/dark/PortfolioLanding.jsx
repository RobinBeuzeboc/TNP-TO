import React from 'react'
import ScrollToTop from 'react-scroll-up'
import { FiChevronUp } from "react-icons/fi"
import Helmet from "../component/common/Helmet"
import TextLoop from "react-text-loop"
import Header from "../component/header/Header"
import Footer from "../component/footer/Footer"
import Contact from "../elements/contact/Contact"
import PortfolioList from "../elements/portfolio/PortfolioList"
import HobbiesList from "../elements/hobbies/HobbiesList"
import ServiceList from "../elements/service/ServiceList"
import BlogContent from "../elements/blog/BlogContent"
import Career from "../elements/career/Career"
import {
    Link,
  } from 'react-router-dom'

const SlideList = [
    {
        textPosition: 'text-left',
        category: '',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]
const PortfolioLanding = () => {
    let title = 'Bonjour',
        description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered <a href="#">alteration</a> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,';
    return (
        <div className="active-dark">
            <Helmet pageTitle="Portfolio Landing" />

            <Header homeLink="/" logo="symbol-dark" color="color-black"/>
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">Thibaut Neu <br/>
                                            <TextLoop>
                                                <span> Chef <br /> de projet.</span>
                                                <span> Communication <br /> digitale.</span>
                                                <span> Stratégie <br />social média.</span>
                                            </TextLoop>{" "}
                                            </h1>
                                            <h2>Basé à Paris</h2>
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-8.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <div className="header-btn">
                                                <a className="rn-btn">
                                                    <Link to="/assets/files/cv_thibaut_neu.pdf" target="_blank" download>Télécharger mon CV</Link>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End About Area */}
            

            {/* Start Service Area  */}
            <div id="service" className="fix">
                <div className="service-area creative-service-wrapper ptb--120 bg_color--5" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                    <h2 className="title">Compétences</h2>
                                    <p>Parce qu'il faut bien savoir faire quelque chose dans ce monde de brutes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            {/* End Service Area  */} 

            {/* Start Portfolio Area */}
            <div id="portfolio" className="fix">
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                        <h2 className="title">Projets</h2>
                                        <p>Parce que j'ai déjà pu mettre mes compétences au service d'autrui.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio Area */}

            {/* Start Blog Area */}
            <div id="course" className="fix">
                <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-center">
                                    <h2>Parcours</h2>
                                    <p>Du début de mes études supérieures à aujourd'hui.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Career />
                        </div>
                    </div>    
                </div>
            </div>
            {/* End Blog Area */}
            {/* Start Hobbies Area */}
            <div id="hobbies" className="fix">
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                        <h2 className="title">Passions</h2>
                                        <p>Parce que je ne suis pas seulement un travailleur.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <HobbiesList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio Area */}


            {/* Start COntact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--5 mb-dec--30">
                    <Contact contactImages="/assets/images/about/about-9.jpg" contactTitle="On discute ?" />
                </div>
            </div>
            {/* End COntact Area */}

            <Footer />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
        </div>
    )
}

export default PortfolioLanding;
