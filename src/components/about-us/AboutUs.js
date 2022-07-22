import React from 'react'
import '../../index.css'
import '../../info-sections.css'
import content from '../../content/content.json'
import MeetTheTeam from './MeetTheTeam'

export default function AboutUs() {

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

    return (
        <div>
            {infoSection(content.about.about_header, content.about.about_summary)}
            <MeetTheTeam />
        </div>
    )
}
