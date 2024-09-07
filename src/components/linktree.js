import React from 'react';
import { FaGithub, FaCodepen } from 'react-icons/fa';
import './styles.css'; // Importa o arquivo CSS
import PhoneNumberInput from './PhoneNumberInput';

const Linktree = () => {
    const links = [
        { name: 'Instagram', url: 'javascript:void(0);', icon: 'https://static.cdn.phobos.id/assets/svg/instagram.svg' },
        { name: 'Plataforma', url: 'javascript:void(0);', icon: 'https://static.cdn.phobos.id/assets/svg/tiktok.svg' },
        { name: 'Fabrika de suplementos', url: 'javascript:void(0);', icon: 'https://static.cdn.phobos.id/assets/svg/codepen.svg' },
    ];

    return (
        <section className="main bg">
            <div className="background">
                <div className="background_image"></div>
            </div>
            <div className="bg_container">
                <div className="container">
                    <div className="container_component" >
                        <div className="profile">
                            <div className="profile_image"></div>
                            <div className="text text_center text_large" >
                                <span style={{ fontWeight: 'bold' }}>China</span>
                            </div>
                            <div className="text text_center">
                                <h4 style={{ fontWeight: "400" }}>Sou China, um atleta de fisiculturismo natural, me dedico ao treinamento e à nutrição sem anabolizantes. me acompanhe e conheça um pouco mais da minha rotina, inspiro outros a seguir um estilo de vida saudável e natural. 💪😊</h4>
                            </div>

                            <div style={{ paddingBottom: "0.5rem", width: "100%" }}>
                                <PhoneNumberInput></PhoneNumberInput>
                            </div>

                            {links.map((link, index) => (
                                <div key={index} className="container_link">
                                    <div className="link_outer">
                                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="link link_circle link_circle_shadow">
                                            <div className="link_icon">
                                                <img className="link_image" src={link.icon} alt={link.name} />
                                            </div>
                                            <div className="link_outer_text">
                                                <div className="text text_center">
                                                    <strong>{link.name}</strong>
                                                </div>
                                            </div>
                                            <div className="link_end"></div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="container_social">
                            <div className="social">
                                <a href="https://facebook.com/your-username" target="_blank" rel="noopener noreferrer" className="social_link social_link_circle" style={{ backgroundColor: '#efefef' }}>
                                    <img className="social_icon" src="https://static.cdn.phobos.id/assets/svg/facebook.svg" alt="Facebook" />
                                </a>
                                <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="social_link social_link_circle" style={{ backgroundColor: '#efefef' }}>
                                    <img className="social_icon" src="https://static.cdn.phobos.id/assets/svg/twitter.svg" alt="Twitter" />
                                </a>
                                <a href="https://youtube.com/@your-username" target="_blank" rel="noopener noreferrer" className="social_link social_link_circle" style={{ backgroundColor: '#efefef' }}>
                                    <img className="social_icon" src="https://static.cdn.phobos.id/assets/svg/youtube.svg" alt="YouTube" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Linktree;
