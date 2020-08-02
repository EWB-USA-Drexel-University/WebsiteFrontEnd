import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import useDarkMode from "use-dark-mode";
import './index.css'
import './info-sections.css'
import content from './home.json'
import images from "./images/img-require";
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

function App (props) {

        const { dark_mode } = useDarkMode(false);


    const infoSection = (header, body) => {
        return (
            <div className='section-container'>
                <div className='info-section'>
                    <div className='info-section-header'>
                        <h3 className='section-header'>{header}</h3>
                    </div>
                    <p className='section-body'>{body}</p>
                </div>
            </div>
        );
    }

   const home = () => {

        function slideshow() {

            let properties = {
                duration: 5000,
                transitionDuration: 500,
                infinite: true,
                indicators: true,
                arrows: true,
                pauseOnHover: true,
                onChange: (oldIndex, newIndex) => {
                    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
                }
            };

            return (
                <div className='slide-container'>
                    <Slide {...properties}>
                        <div className='each-slide'>
                            <div className={'each-slide'}>
                            <span><img src={require('./images/img1.jpg')} alt='sample'
                                       width={"80%"} height={"100%"}/></span>
                            </div>
                        </div>
                        <div className='each-slide'>
                            <div className={'each-slide'}>
                            <span><img src={require('./images/img2.jpg')} alt='sample'
                                       width={"100%"} height={"100%"}/></span>
                            </div>
                        </div>
                        <div className='each-slide'>
                            <div className={'each-slide'}>
                            <span><img src={require('./images/img3.jpg')} alt='sample'
                                       width={"100%"} height={"100%"}/></span>
                            </div>
                        </div>
                    </Slide>
                </div>
            )
        }

        const big_info = () => {
            return(
                <div className={'big-info'}>
                        <ul className='involvement-section'>
                            <li className={'left-element'}><h2><a href='https://dragonlink.drexel.edu/organization/engineers-without-borders'>
                                Dragon Link</a></h2></li>
                            <li className={'right-element'}><h2><Link to='/get_involved'>Get Involved</Link></h2></li>
                        </ul>
                    <a href={'https://www.instagram.com/drexelewb/'}> EWB Instagram </a>
                </div>
            )
        }



        return (<div className='page-content'>
            {slideshow()}
            {infoSection(content.sample.test2, content.sample.test)}
            {big_info()}
        </div>
        );
    }

    const about = () => {
        return (
            <div>
                <h2>About Us</h2>
                {infoSection(content.sample.test2, content.sample.test)}
            </div>
        );
    }

    const projects = () => {

        // let match = this.matchRoute();

        return (
            <div>
                <h2>Projects</h2>
                <p>{projectInfoSection('Miramar', 'stuff that happened')}</p>
            </div>
        );
    }

    const projectInfoSection = (name, background, img, timeline) => {

        return(
            <div className={'project'}>
                <h1>{name}</h1>
                <p>{background}</p>


            </div>
        );

    }

    const get_involved = () => {
        return <h2>Get Involved</h2>;
    }

    const memberProfile = (name, position, img) => {

        return(
            <div className={'column'}>
                <div className="card">
                    <img src={img} style={{borderRadius: '5px'}} width={'475px'} height={'550px'} />
                    <div className="container">
                        <h2>{name}</h2>
                        <p className="title">{position}</p>
                    </div>
                </div>
            </div>
        );
    }

    const meet_the_team = () => {
        return (
            <div className='team-content'>
                <h2>Meet The Team</h2>
                <div className={'row'}>
                    <p>{memberProfile('Jillian Saunders', 'President', images.eboard.president)}</p>
                    <p>{memberProfile('Josh McGuckin', 'Vice President', images.eboard.vice_president)}</p>
                    <p>{memberProfile('Gavin Maguire', 'Sustainability Chair', images.eboard.sustainability_chair)}</p>
                    <p>{memberProfile('Will Scales', 'Global Relations Lead', images.eboard.global_relations_lead)}</p>
                    <p>{memberProfile('Marley Downes', 'Secretary', images.eboard.secretary)}</p>
                    <p>{memberProfile('Malena Farber', 'Domestic Design Lead', images.eboard.domestic_design_lead)}</p>
                    <p>{memberProfile('Katherine Comisac', 'Member Coordinator', images.eboard.member_coord)}</p>
                    <p>{memberProfile('Isabella Snyder', 'Miramar Lead', images.eboard.miramar_lead)}</p>
                    <p>{memberProfile('Sara Scanlin', 'Social Media Lead', images.eboard.social_media)}</p>
                    <p>{memberProfile('Bronwyn Sayre', 'Marketing Lead', images.eboard.marketing)}</p>
                    <p>{memberProfile('Betty Long', 'Event Coordinator', images.eboard.event_coord)}</p>
                    <p>{memberProfile('Youssef Jouchiate', 'SAFAC Chair', images.eboard.safac_chair)}</p>
                    <p>{memberProfile('Darrell Omo-Lamai', 'Event Coordinator', images.eboard.travel_coord)}</p>
                </div>
            </div>
    );
    }



    return (
        <div className='starter'>
            <Router>
                <nav className='mainNav'>
                    <ul>
                        <li><img src={images.logo.navLogo} className={'nav-logo'}/></li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/projects'>Our Projects</Link></li>
                        <li><Link to='/get_involved'>Get Involved</Link></li>
                        <li><Link to='/meet_the_team'>Meet The Team</Link></li>
                        <li><a href='https://www.ewb-usa.org/donate/'>Donate</a></li>
                        <li></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path={'/about'}>
                        {about}
                    </Route>
                    <Route path={'/projects'}>
                        {projects()}
                    </Route>
                    <Route path={'/get_involved'}>
                        {get_involved()}
                    </Route>
                    <Route path={'/meet_the_team'}>
                        {meet_the_team()}
                    </Route>
                    <Route path={'/'}>
                        {home()}
                    </Route>
                </Switch>
            </Router>
            <div className={'footer'}>
                <p>Footer</p>
            </div>
        </div>
    );
}


ReactDOM.render(<App/>, document.getElementById('root'));