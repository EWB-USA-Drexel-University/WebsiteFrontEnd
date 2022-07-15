import React from 'react'
import {
    Link
} from "react-router-dom";
import content from '../../content/content.json';
import {SlideShow} from './SlideShow.js';
export function HomePage(){
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
        <SlideShow></SlideShow>
        {infoSection(content.home.mission_header, content.home.mission_body)}
        {informationLinks()}
    </div>
    );
}