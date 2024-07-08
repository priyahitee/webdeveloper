import React from 'react'
import './About.css'

const AboutSection = () => {
    return (
        <section className="aboutPMEntire">
            <div className="aboutPMEntire_imageContainer">
                <img
                    className="lazy-hidden"
                    src="/images/about-pmentire-img.webp"
                    alt="PMEntire About Us"
                    width="685"
                    height="620"
                />
            </div>
            <div className="aboutPMEntire_textContainer">
                <h1 className="heading">About PMEntire</h1>
                <p className="text">
                    <span>
                        PMEntire software empowers professional service organizations to reach new levels of
                        efficiency and profitability. With over 20 years of industry experience, our PSA tool
                        is designed to help businesses overcome the challenges of the 2020s and beyond. Some
                        of them include global competition, market volatility, business uncertainties, and
                        more.
                    </span>
                    <span>
                        PMEntire specializes in PSA software and it is a part of the Saviom group of
                        companies. Saviom has catered to the needs of several Fortune 500 companies across 50+
                        countries. Some of our notable customers include Siemens, Fujitsu, DHL, Honeywell,
                        Global Wind Services, Alix Partner, and many more.
                    </span>
                </p>
            </div>
        </section>
    )
}

export default AboutSection