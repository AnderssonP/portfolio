import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({ text, link, btnText }) => {
    return (
        <div className='info-box'>
            <p className='font-medium sm:text-x1 text-center'>{text}</p>
            <Link to={link} className='neo-brutalism-white neo-btn'>
                {btnText}
            </Link>
        </div>
    );
}

const renderContent = {
    1: (
        <h1 className='sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px8 text-white mx8'>
            Hi, I am <span className='font-semibold'>Pontus</span>
            <br />
            A Software Developer from Sweden
        </h1>
    ),
    2: (
        <InfoBox
            text="I am a selfdriven and enthusiastic developer who always strive to learn new ways to code"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Explore my projects and see what i can do for you"
            link="/projects"
            btnText="Explore projects"
        />
    ),
    4: (
        <InfoBox
            text="Get in touch with me!"
            link="/contact"
            btnText="Contact"
        />
    )
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}


export default HomeInfo