import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './info-sections.css'
import content from './content/content.json';
import images from "./images/img-require";

import ReactGA from 'react-ga';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AboutUs from './components/about-us/AboutUs'
import {HomePage} from './components/home-page/HomePage'
import GetInvolved from './components/get-involved/GetInvolved'

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



    function projects() {

        let miramar = projectInfoSection(content.projects.miramar.header, content.projects.miramar.summary.paragraph_one,
            content.projects.miramar.summary.paragraph_two, images.content.miramar_cover);
        let ecuador = projectInfoSection(content.projects.ecuador.header, content.projects.ecuador.summary.paragraph_one,
            content.projects.ecuador.summary.paragraph_two, images.content.ecuador_cover);
        let sanctuary_farm = projectInfoSection(content.projects.sanctuary_farm.header, content.projects.sanctuary_farm.summary.paragraph_one, 
            null, images.content.sanctuary_farm_cover);
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
                        {sanctuary_farm}
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
                                {projects()}
                            </Route>
                            <Route path={'/get_involved'}>
                                <GetInvolved />
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