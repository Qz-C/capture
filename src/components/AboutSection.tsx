import { FC } from 'react';

import bruxo from "../assets/images/bruxo.jpg"

const AboutSection: FC = () => {
    return (
        <div className="AboutSection">
            <div className="description">
                <div>
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>
                            your <span> dreams </span> come
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
            </div>
            <p>
                Bring your ideas and we give you the right professional.
            </p>
            <button> Contact Us </button>
            <div className="image">
                <img src={bruxo} alt="bruxo"/>
            </div>
        </div>
    );
}

export default AboutSection;
