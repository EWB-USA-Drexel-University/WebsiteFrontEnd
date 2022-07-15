import React from 'react'
import {
    Link
} from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import content from '../../content/content.json';

export function HomePage(){
    function slideShow() {

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
                            <span><img src={require('../../images/landscape.JPG')} alt='sample'
                                width={"100%"} height={"100%"} /></span>
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div className={'each-slide'}>
                            <span><img src={require('../../images/circle.jpg')} alt='sample'
                                width={"100%"} height={"100%"} /></span>
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div className={'each-slide'}>
                            <span><img src={require('../../images/hiker_hill.JPG')} alt='sample'
                                width={"100%"} height={"100%"} /></span>
                        </div>
                    </div>
                    <div className='each-slide'>
                        <div className={'each-slide'}>
                            <span><img src={require('../../images/surveying.jpg')} alt='sample'
                                width={"100%"} height={"100%"} /></span>
                        </div>
                    </div>
                </Slide>
            </div>
        )
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

    const informationLinks = () => {
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
        {slideShow()}
        {infoSection(content.home.mission_header, content.home.mission_body)}
        {informationLinks()}
    </div>
    );
}