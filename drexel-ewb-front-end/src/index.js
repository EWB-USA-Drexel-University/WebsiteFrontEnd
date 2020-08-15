import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './info-sections.css'
import content from './content/content.json';
import images from "./images/img-require";
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App () {



    function infoSection(header, body) {
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

    function home() {

        function slideshow() {

            let properties = {
                duration: 10000,
                transitionDuration: 1000,
                infinite: true,
                indicators: true,
                arrows: false,
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
                            <span><img src={require('./images/landscape.JPG')} alt='sample'
                                       width={"100%"} height={"100%"}/></span>
                            </div>
                        </div>
                        <div className='each-slide'>
                            <div className={'each-slide'}>
                            <span><img src={require('./images/circle.jpg')} alt='sample'
                                       width={"100%"} height={"100%"}/></span>
                            </div>
                        </div>
                        <div className='each-slide'>
                            <div className={'each-slide'}>
                            <span><img src={require('./images/hiker_hill.JPG')} alt='sample'
                                       width={"100%"} height={"100%"}/></span>
                            </div>
                        </div>
                        <div className='each-slide'>
                            <div className={'each-slide'}>
                            <span><img src={require('./images/surveying.jpg')} alt='sample'
                                       width={"100%"} height={"100%"}/></span>
                            </div>
                        </div>
                    </Slide>
                </div>
            )
        }

        const big_info = () => {
            return (
                <div className={'big-info'}>
                    <ul className='involvement-section'>
                        <li className={'left-element'}><h2><a
                            href='https://dragonlink.drexel.edu/organization/engineers-without-borders'>
                            Dragon Link</a></h2></li>
                        <li className={'right-element'}><h2><Link to='/get_involved'>Get Involved</Link></h2></li>
                        <li className={'insta'}><h2><a href={'https://www.instagram.com/drexelewb/'}>Instagram</a></h2>
                        </li>
                    </ul>
                </div>
            )
        }

        return (<div className='page-content'>
                <div style={{textAlign: 'center'}}><img src={images.logo.DU_EWB} style={{height: '125px'}}/></div>
                {slideshow()}
                {infoSection(content.home.mission_header,content.home.mission_body)}
                {big_info()}
            </div>
        );
    }


function about() {
    return (
        <div>
            {infoSection(content.about.about_header, content.about.about_summary)}
        </div>
    );
}

function projects() {

    let miramar = projectInfoSection(content.projects.miramar.header, content.projects.miramar.summary.paragraph_one,
        content.projects.miramar.summary.paragraph_two);
    let ecuador = projectInfoSection(content.projects.ecuador.header, content.projects.ecuador.summary.paragraph_one,
        content.projects.ecuador.summary.paragraph_two);

    return (
        <div>
            <h2>Projects</h2>
            <div>
                <div>
                    {miramar}
                    {ecuador}
                    {/*<Router>*/}
                    {/*    <ul>*/}
                    {/*        <li><Link to='/miramar'>Miramar</Link></li>*/}
                    {/*        <li><Link to='/ecuador'>Ecuador</Link></li>*/}
                    {/*    </ul>*/}
                    {/*    <Switch>*/}
                    {/*        <Route path={'/miramar'}>{miramar}</Route>*/}
                    {/*        <Route path={'/ecuador'}>{ecuador}</Route>*/}
                    {/*    </Switch>*/}
                    {/*</Router>*/}

                </div>
            </div>


        </div>
    );
}

function projectInfoSection(name, background_one, background_two, img, timeline) {

    return (
        <div className={'project'}>
            <h1>{name}</h1>
            <div className={'project-picture'}><img src={img}/></div>
            <div className={'project-details'}>
                <p>{background_one}</p>
                <p>{background_two}</p>
                <p>{timeline}</p>
            </div>

        </div>
    );

}

function get_involved() {
    return (
        <div>
            <h2>Get Involved</h2>
            <p>
                {infoSection(content.get_involved.domestic_design.domestic_header,
                    content.get_involved.domestic_design.domestic_info)}
                {infoSection(content.get_involved.grid.grid_header, content.get_involved.grid.grid_info)}
                {infoSection(content.get_involved.tech.tech_header, content.get_involved.tech.tech_info)}
                {infoSection(content.get_involved.marketing_fundraising.marketing_header,
                    content.get_involved.marketing_fundraising.marketing_info)}
            </p>
        </div>
    );
}

function memberProfile(name, position, img) {

    return (
        <div className={'column'}>
            <div className="card">
                <img src={img} style={{borderRadius: '5px'}} width={'475px'} height={'550px'}/>
                <div className="container">
                    <h2>{name}</h2>
                    <p className="title">{position}</p>
                </div>
            </div>
        </div>
    );
}

function meet_the_team() {
    return (
        <div className='team-content'>
            <h2>Meet The Team</h2>
            <div className={'row'}>
                <p>{memberProfile('Jillian Saunders', 'President', images.eboard.president)}</p>
                <p>{memberProfile('Josh McGuckin', 'Vice President', images.eboard.vice_president)}</p>
                <p>{memberProfile('Marley Downes', 'Secretary', images.eboard.secretary)}</p>
                <p>{memberProfile('Will Scales', 'Global Relations Lead', images.eboard.global_relations_lead)}</p>
                <p>{memberProfile('Malena Farber', 'Domestic Design Lead', images.eboard.domestic_design_lead)}</p>
                <p>{memberProfile('Elizabeth Clarkson', 'Event Coordinator', images.eboard.event_coord)}</p>
                <p>{memberProfile('Gavin Maguire', 'Sustainability Chair', images.eboard.sustainability_chair)}</p>
                <p>{memberProfile('Katherine Comisac', 'Member Coordinator', images.eboard.member_coord)}</p>
                <p>{memberProfile('Isabella Snyder', 'Miramar Lead', images.eboard.miramar_lead)}</p>
                <p>{memberProfile('Sara Scanlin', 'Social Media Lead', images.eboard.social_media)}</p>
                <p>{memberProfile('Bronwyn Sayre', 'Marketing Lead', images.eboard.marketing)}</p>
                <p>{memberProfile('Youssef Jouchiate', 'SAFAC Chair', images.eboard.safac_chair)}</p>
                <p>{memberProfile('Darrell Omo-Lamai', 'Event Coordinator', images.eboard.travel_coord)}</p>
                <p>{memberProfile('Patty Inroon', 'Fundraising Lead', images.eboard.fundraising_lead)}</p>
                <p>{memberProfile('Har Patel', 'Tech Lead', images.eboard.tech_lead)}</p>
                <p>{memberProfile('Maggie McCurdy', 'GRID Lead', images.eboard.grid_lead)}</p>
                <p>{memberProfile('Nicole Tavormina', 'Ecuador Lead', images.eboard.ecuador_lead)}</p>
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
                <div>
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
                            {about()}
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
                </div>
            </Router>
            <footer>
                <div style={{textAlign: 'center'}}>
                    <h5>&#169; Engineers Without Borders: Drexel University 2020</h5>
                    <p><a href={'https://github.com/DrexelEWBTechTeam/WebsiteFrontEnd'}>GitHub</a></p>
                </div>
            </footer>
        </div>
    </div>
);
}

ReactDOM.render(<App />, document.getElementById('root'));