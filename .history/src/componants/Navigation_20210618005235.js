import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <svg viewBox="0 0 160 160" width="160" height="160">
                        <circle cx="80" cy="80" r="50" />
                        <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
                            <path
                                d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z"
                                fill="red"
                            >
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    from="360 0 0"
                                    to="0 0 0"
                                    dur="3s"
                                    repeatCount="indefinite"
                                />
                            </path>
                        </g>
                        <path
                            d="M 50,0 A 50,50 0 0,0 -50,0Z"
                            transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)"
                        />
                    </svg>
                    <h3>cordelia guims</h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fa fa-home"></i>
                            <span>Acceuil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/services" activeClassName="navActive">
                            <i className="fas fa-briefcase"></i>
                            <span>services</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/projets" activeClassName="navActive">
                            <i className="fa fa-image"></i>
                            <span>projets</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fa fa-address-book"></i>
                            <span>contact</span>
                        </NavLink>
                    </li>
                  
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-codepen"></i>
                        </a>
                    </li>
                </ul>
                <div className="signature">
                <p>KoMinhS</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
