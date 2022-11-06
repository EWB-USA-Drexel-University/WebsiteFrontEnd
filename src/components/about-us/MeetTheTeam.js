import React from 'react'
import '../../index.css'
import '../../info-sections.css'
import images from '../../images/img-require'

export default function MeetTheTeam() {

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

  return (
    <div className='team-content'>
                <h2>Meet The Team</h2>
                <div className={'row'}>
                    <p>{memberProfile('Bronwyn Sayre', 'President', images.eboard.president)}</p>
                    <p>{memberProfile('Kate Comisac', 'Vice President', images.eboard.vice_president)}</p>
                    <p>{memberProfile('Suketh Sivakumar', 'Treasurer', images.eboard.treasurer)}</p>
                    <p>{memberProfile('Chris Bahr', 'Secretary', images.eboard.secretary)}</p>
                    <p>{memberProfile('Eva Kraus', 'GRID Lead', images.eboard.grid_lead)}</p>
                    <p>{memberProfile('Michael Luciano', 'Domestic Design Lead', images.eboard.domestic_design_lead)}</p>
                    <p>{memberProfile('Sukethram Sivakumar', 'Fundraising Lead', images.eboard.fundraising_lead)}</p>
                    <p>{memberProfile('Amanda Milo', 'Marketing Lead', images.eboard.marketing)}</p>
                    <p>{memberProfile('Yonatan Wiese-Namir', 'Tech Lead', images.eboard.tech_lead)}</p>
                    <p>{memberProfile('Sofia Martinez', 'Member Coordinator', images.eboard.member_coord)}</p>
                </div>
            </div>
  )
}
