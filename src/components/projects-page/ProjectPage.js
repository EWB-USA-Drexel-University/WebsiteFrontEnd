import React from 'react'
import '../../index.css'
import '../../info-sections.css'
import images from '../../images/img-require'
import content from '../../content/content.json'

export default function Projects() {

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


