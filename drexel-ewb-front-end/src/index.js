import React from 'react'
import ReactDOM from 'react-dom'
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
    Link
} from "react-router-dom";

function App () {

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
                                       width={"80%"} height={"80%"}/></span>
                            </div>
                        </div>
                        <div className='each-slide'>
                            <div className={'each-slide'}>
                            <span><img src={require('./images/img2.jpg')} alt='sample'
                                       width={"90%"} height={"90%"}/></span>
                            </div>
                        </div>
                        <div className='each-slide'>
                            <div className={'each-slide'}>
                            <span><img src={require('./images/img3.jpg')} alt='sample'
                                       width={"89%"} height={"89%"}/></span>
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
                {infoSection(content.sample.test2, content.sample.test)}
            </div>
        );
    }

    const about = () => {
        return (
            <div>
                <h2>About Us</h2>
                {infoSection(content.sample.test2, content.sample.test)}
                {infoSection(content.sample.test2, content.sample.test)}
                {infoSection(content.sample.test2, content.sample.test)}
                {infoSection(content.sample.test2, content.sample.test)}
                {infoSection(content.sample.test2, content.sample.test)}
            </div>
        );
    }

    const projects = () => {

        return (
            <div>
                <h2>Projects</h2>
                <p>{projectInfoSection('Miramar', 'stuff that happened')}</p>
                {infoSection(content.sample.test2, content.sample.test)}
                {infoSection(content.sample.test2, content.sample.test)}
                {infoSection(content.sample.test2, content.sample.test)}
                {infoSection(content.sample.test2, content.sample.test)}
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
        return (
            <div>
            <h2>Get Involved</h2>
            <p>
                {infoSection(content.sample.test2, content.sample.test)}
                {infoSection(content.sample.test2, content.sample.test)}
                {infoSection(content.sample.test2, content.sample.test)}
                {infoSection(content.sample.test2, content.sample.test)}
            </p>
    </div>
        );
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

    const [darkMode, setDarkMode] = React.useState(getInitialMode());
    React.useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(darkMode));
    }, [darkMode]);

    function getInitialMode() {
        const isReturningUser = 'dark' in localStorage;
        const savedMode = JSON.parse(localStorage.getItem('dark'));
        const userPrefersDark = getPrefColorScheme();

        if (isReturningUser) {
            return savedMode;
        } else if (userPrefersDark) {
            return true;
        } else {
            return false;
        }

    }

    function getPrefColorScheme() {
        if (!window.matchMedia) return;

        return window.matchMedia("(prefers-color-scheme: dark").matches;
    }

    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
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
                            <li>
                                <div className="toggle-container">
                                    <span style={{color: darkMode ? "grey" : "yellow"}}>☀︎</span>
                                    <span className="toggle">
                                        <input
                                            checked={darkMode}
                                            onChange={() => setDarkMode(prevMode => !prevMode)}
                                            id="checkbox"
                                            className="checkbox"
                                            type="checkbox"
                                        />
                                        <label htmlFor="checkbox"/>
                                      </span>
                                    <span style={{color: darkMode ? "slateblue" : "grey"}}>☾</span>
                                </div>
                            </li>
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
                <footer>
                    <div style={{textAlign: 'center'}}>
                        <h2>Engineers Without Borders Drexel University</h2>
                        <p>Written in ReactJS</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}


ReactDOM.render(<App/>, document.getElementById('root'));