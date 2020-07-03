import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './info-sections.css'
import content from './home.json'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

class EWBWeb extends React.Component {

    renderNavBar() {
        return (
            <div className='starter'>
                <nav className='mainNav'>
                    <a className='link' href='home'>Home</a>
                    <a className='link' href='about_us'>About Us</a>
                    <a className='link' href='our_projects'>Our Projects</a>
                    <a className='link' href='get_involved'>Get Involved</a>
                    <a className='link' href='meet_the_team'>Meet The Team</a>
                    <a className='donateLink' href='https://www.ewb-usa.org/donate/'>Donate</a>
                </nav>
            </div>
        );
    }

    slideshow() {

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
                            <span><img src={require('')} alt='sample photo'
                                       width={"80%"} height={"100%"}/></span>
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div className={'each-slide'}>
                            <span><img src={require('')} alt='sample photo'
                                       width={"100%"} height={"100%"}/></span>
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div className={'each-slide'}>
                            <span><img src={require('')} alt='sample photo'
                                       width={"100%"} height={"100%"}/></span>
                        </div>
                    </div>
                </Slide>
            </div>
        )
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

    render() {

        return(
            <body>
                <div className='navigation'>
                    {this.renderNavBar()}
                </div>
                <div className='page-content'>
                    {this.slideshow()}
                    {this.infoSection(content.sample.test2, content.sample.test)}
                </div>
            </body>

        )
    }
}

ReactDOM.render(
    <EWBWeb />,
    document.getElementById('root')
);