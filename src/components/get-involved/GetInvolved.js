import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import content from '../../content/content.json';
import images from "../../images/img-require";
export default function GetInvolved(){


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
        )
}