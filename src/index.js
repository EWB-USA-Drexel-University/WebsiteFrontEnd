import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './info-sections.css'
import content from './content/content.json';
import images from "./images/img-require";
import { Slide } from 'react-slideshow-image';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import ReactGA from 'react-ga';
import 'react-slideshow-image/dist/styles.css'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {

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
                                    width={"100%"} height={"100%"} /></span>
                            </div>
                        </div>
                        <div className='each-slide'>
                            <div className={'each-slide'}>
                                <span><img src={require('./images/circle.jpg')} alt='sample'
                                    width={"100%"} height={"100%"} /></span>
                            </div>
                        </div>
                        <div className='each-slide'>
                            <div className={'each-slide'}>
                                <span><img src={require('./images/hiker_hill.JPG')} alt='sample'
                                    width={"100%"} height={"100%"} /></span>
                            </div>
                        </div>
                        <div className='each-slide'>
                            <div className={'each-slide'}>
                                <span><img src={require('./images/surveying.jpg')} alt='sample'
                                    width={"100%"} height={"100%"} /></span>
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

        const logo_color = () => {
            if (darkMode) {
                return (
                    <div style={{ textAlign: 'center' }}><img src={images.logo.DU_EWB_White} style={{ height: '125px' }} /></div>
                );
            } else {
                return (
                    <div style={{ textAlign: 'center' }}><img src={images.logo.DU_EWB} style={{ height: '125px' }} /></div>
                )
            }
        }

        return (<div className='page-content'>
            {logo_color()}
            {slideshow()}
            {infoSection(content.home.mission_header, content.home.mission_body)}
            {big_info()}
        </div>
        );
    }


    function about() {

        function memberProfile(name, position, img) {

            return (
                <div className={'column'}>
                    <div className="card">
                        <img src={img} className={'team-image'} />
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
                        <p>{memberProfile('Bronwyn Sayre', 'Vice President', images.eboard.vice_president)}</p>
                        <p>{memberProfile('Darrell Omo-Lamai', 'Treasurer', images.eboard.treasurer)}</p>
                        <p>{memberProfile('Malena Farber', 'Event Coordinator', images.eboard.event_coord)}</p>
                        <p>{memberProfile('Eva Kraus', 'Secretary', images.eboard.secretary)}</p>
                        <p>{memberProfile('Marley Downes', 'GRID Lead', images.eboard.grid_lead)}</p>
                        <p>{memberProfile('Kate Comisac', 'Domestic Design Lead', images.eboard.domestic_design_lead)}</p>
                        <p>{memberProfile('Patty Inroon', 'Fundraising Lead', images.eboard.fundraising_lead)}</p>
                        <p>{memberProfile('Amanda Milo', 'Marketing Lead', images.eboard.marketing)}</p>
                        <p>{memberProfile('Nathan Beebe', 'Tech Lead', images.eboard.tech_lead)}</p>
                        <p>{memberProfile('Sukethram Sivakumar', 'Member Coordinator', images.eboard.member_coord)}</p>

                        <p>{memberProfile('Will Scales', 'Global Relations Chair', images.chairs.global_relations_lead)}</p>
                        <p>{memberProfile('Nicole Tavormina', 'Ecuador Lead', images.chairs.san_luis_lead)}</p>
                        <p>{memberProfile('Elizabeth Clarkson', 'Sustainability Lead', images.chairs.sustainability_chair)}</p>
                        <p>{memberProfile('Alyssa Kemp', 'Travel Coordinator', images.chairs.travel_coord)}</p>
                        <p>{memberProfile('Justin Stiles', 'Project Finder', images.chairs.project_finder)}</p>

                    </div>
                </div>
            );
        }

        return (
            <div>
                {infoSection(content.about.about_header, content.about.about_summary)}
                {meet_the_team()}
            </div>
        );
    }

    function projects() {

        let miramar = projectInfoSection(content.projects.miramar.header, content.projects.miramar.summary.paragraph_one,
            content.projects.miramar.summary.paragraph_two, images.content.miramar_cover);
        let ecuador = projectInfoSection(content.projects.ecuador.header, content.projects.ecuador.summary.paragraph_one,
            content.projects.ecuador.summary.paragraph_two, images.content.ecuador_cover);

        return (
            <div>
                <div>
                    <div>
                        {miramar}
                        <div className={'embedded-video'}>
                            <iframe className={'project-video'} src="https://www.youtube-nocookie.com/embed/ItTIT9TAhRg"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        </div>
                        {ecuador}
                    </div>
                </div>


            </div>
        );
    }

    function projectInfoSection(name, background_one, background_two, img, timeline) {

        return (
            <div className={'project'}>
                <h1>{name}</h1>
                <div className={'project-picture-container'}>
                    <img src={img} className={'project-image'} />
                </div>
                <div className={'project-details'}>
                    <p>{background_one}</p>
                    <p>{background_two}</p>
                    <p>{timeline}</p>
                </div>
            </div>
        );

    }

    function mailchimp() {

        const url = 'https://drexelewb.us17.list-manage.com/subscribe/post?u=eb498d0265dc0ed85f1f7d71e&amp;id=c6b77ac831';

        return (
            <div className={'mail-form'}>
                <div className={'mail-header'}>
                    <h3>News Letter</h3>
                </div>
                <p>{content.get_involved.news_letter.news_letter_desc}</p>
                <MailchimpSubscribe url={url} />
            </div>

        );
    }



    function get_involved() {
        return (
            <div>
                <div className={"page-header"}>
                    <h2>Get Involved</h2>
                    {mailchimp()}
                </div>
                <p>
                    <div className={'content-img-container'}>
                        <img src={images.content.domestic} className='project-image' />
                    </div>
                    {infoSection(content.get_involved.domestic_design.domestic_header,
                        content.get_involved.domestic_design.domestic_info)}
                    <div className={'content-img-container'}>
                        <img src={images.content.grid} className='project-image' />
                    </div>
                    {infoSection(content.get_involved.grid.grid_header, content.get_involved.grid.grid_info)}
                    <div className={'content-img-container'}>
                        <img src={images.content.tech} className='project-image' />
                    </div>
                    {infoSection(content.get_involved.tech.tech_header, content.get_involved.tech.tech_info)}
                    <div className={'content-img-container'}>
                        <img src={images.content.meet_n_greet} className='project-image' />
                    </div>
                    {infoSection(content.get_involved.marketing_fundraising.marketing_header,
                        content.get_involved.marketing_fundraising.marketing_info)}
                </p>
            </div>
        );
    }

    const [darkMode, setDarkMode] = React.useState(getInitialMode());
    React.useEffect(() => {
        ReactGA.initialize('UA-180749694-1')
        ReactGA.pageview(window.location.pathname + window.location.search);
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
                            <ul className={'link-list'}>
                                <li><img src={images.logo.navLogo} className={'nav-logo'} /></li>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About Us</Link></li>
                                <li><Link to='/projects'>Our Projects</Link></li>
                                <li><Link to='/get_involved'>Get Involved</Link></li>
                                <li><a href='https://support.ewb-usa.org/team/204680'>Donate</a></li>
                                <div className="toggle-container">
                                    <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
                                    <span className="toggle">
                                        <input
                                            checked={darkMode}
                                            onChange={() => setDarkMode(prevMode => !prevMode)}
                                            id="checkbox"
                                            className="checkbox"
                                            type="checkbox"
                                        />
                                        <label htmlFor="checkbox" />
                                    </span>
                                    <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
                                </div>
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
                            <Route path={'/'}>
                                {home()}
                            </Route>
                        </Switch>
                    </div>
                </Router>
                <footer>
                    <div className={'footer'} style={{ textAlign: 'center' }}>
                        <h5>&#169; Engineers Without Borders: Drexel University 2021</h5>
                        <p><a href='https://github.com/EWB-USA-Drexel-University/WebsiteFrontEnd'>GitHub</a></p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));