import { FC } from 'react';
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import FaqSection from "../components/FaqSection";

const AboutUs: FC = () => {
    return (
        <>
            <AboutSection />
            <ServiceSection />
            <FaqSection />
        </>
    );
}

export default AboutUs;
