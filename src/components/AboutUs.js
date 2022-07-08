import React from 'react'
import '../index.css'
import '../info-sections.css'
import images from '../images/img-require'
import content from '../content/content.json'

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

    function meetTheTeam() {
        return (
            <div className='team-content'>
                <h2>Meet The Team</h2>
                <div className={'row'}>
                    <p>{memberProfile('Jillian Saunders', 'President', images.eboard.president)}</p>
                    <p>{memberProfile('Bronwyn Sayre', 'Vice President', images.eboard.vice_president)}</p>
                    <p>{memberProfile('Darrell Omo-Lamai', 'Treasurer', images.eboard.treasurer)}</p>
                    <p>{memberProfile('Ned Elshafi', 'Event Coordinator', images.eboard.event_coord)}</p>
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
            {meetTheTeam()}
        </div>
    )
}
