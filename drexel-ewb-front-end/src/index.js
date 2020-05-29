import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class EWBWeb extends React.Component {
    renderNavBar() {
        return(
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

    render() {
        return(
            <div className='navigation'>
                {this.renderNavBar()}
            </div>
        )
    }
}

ReactDOM.render(
    <EWBWeb />,
    document.getElementById('root')
);