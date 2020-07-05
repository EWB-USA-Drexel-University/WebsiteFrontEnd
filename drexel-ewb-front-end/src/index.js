import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './info-sections.css'
import content from './home.json'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class App extends React.Component {
    render() {
        return (
            <div className='starter'>
                <Router>
                    <nav className='mainNav'>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About Us</Link></li>
                            <li><Link to='/projects'>Our Projects</Link></li>
                            <li><Link to='/get_involved'>Get Involved</Link></li>
                            <li><Link to='/meet_the_team'>Meet The Team</Link></li>
                            <li><a href='https://www.ewb-usa.org/donate/'>Donate</a></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path={'/about'}>
                            {this.about()}
                        </Route>
                        <Route path={'/projects'}>
                            {this.projects()}
                        </Route>
                        <Route path={'/get_involved'}>
                            {this.get_involved()}
                        </Route>
                        <Route path={'/meet_the_team'}>
                            {this.meet_the_team()}
                        </Route>
                        <Route path={'/'}>
                            {this.home()}
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }

    infoSection(header, body) {
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

    home() {

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
                            <span><img src={require('./images/img1.jpg')} alt='sample photo'
                                       width={"80%"} height={"100%"}/></span>
                            </div>
                        </div>
                        <div className='each-slide'>
                            <div className={'each-slide'}>
                            <span><img src={require('./images/img2.jpg')} alt='sample photo'
                                       width={"100%"} height={"100%"}/></span>
                            </div>
                        </div>
                        <div className='each-slide'>
                            <div className={'each-slide'}>
                            <span><img src={require('./images/img3.jpg')} alt='sample photo'
                                       width={"100%"} height={"100%"}/></span>
                            </div>
                        </div>
                    </Slide>
                </div>
            )
        }


        return (<div className='page-content'>
            {slideshow()}
            {this.infoSection(content.sample.test2, content.sample.test)}
        </div>
        );
    }

    about(){
        return (
            <div>
                <h2>About Us</h2>
                {this.infoSection(content.sample.test2, content.sample.test)}
            </div>
        );
    }

    projects() {
        return <h2>Projects</h2>;
    }
    get_involved() {
        return <h2>Get Involved</h2>;
    }

    meet_the_team() {
        return <h2> Meet The Team</h2>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);