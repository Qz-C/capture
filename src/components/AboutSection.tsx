import { FC } from "react";
import styled from "styled-components";
import bruxo from "../assets/images/bruxo.jpg"

const AboutSection: FC = () => {
    return (
        <About>
            <Description>
                <div>
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            your <span> dreams </span> come
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>
                    Bring your "dibre" and I will give you the right spell.
                </p>
                <button> Contact Us </button>
            </Description>
            <Image>
                <img src={bruxo} alt="bruxo" />
            </Image>
        </About>
    );
}

const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content:space;
    padding: 5rem 10rem;
    color: white;
`;

const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight:lighter;
    }
`

const Image = styled.div `
    flex: 1;
    overflow: hidden;
    img {
        width:100%;
        height: 80vh;
        object-fit: cover;
    }
`

const Hide = styled.div`
    overflow: hidden;
`


export default AboutSection;
