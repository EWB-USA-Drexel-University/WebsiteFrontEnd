import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './info-sections.css'
import content from './content/content.json'
import images from './images/img-require'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import ReactGA from 'react-ga'
import 'react-slideshow-image/dist/styles.css'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import HomePage from './components/home-page/HomePage.js'
import AboutUs from './components/about-us/AboutUs'
import Projects from './components/projects-page/ProjectPage'

export default function App() {

    
    function logo_color() {
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
                        {logo_color()}
                        <Switch>
                            <Route path={'/about'}>
                                <AboutUs />
                            </Route>
                            <Route path={'/projects'}>
                                <Projects />
                            </Route>
                            <Route path={'/get_involved'}>
                                {get_involved()}
                            </Route>
                            <Route path={'/'}>
                                <HomePage />
                            </Route>
                        </Switch>
                    </div>
                </Router>
                <footer>
                    <div className={'footer'} style={{ textAlign: 'center' }}>
                        <h5>&#169; Engineers Without Borders: Drexel University 2022</h5>
                        <p><a href='https://github.com/EWB-USA-Drexel-University/WebsiteFrontEnd'>GitHub</a></p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));