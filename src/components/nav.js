import React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom";

import logo from '../assets/logo.svg'
import hamburguer from '../assets/hamburguer.svg'
import newTab from '../assets/going-out.svg'
import './nav.css'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownTrivia: false,
            dropdownSites: false,
            extended: false
        }
        this.toggleDropdownTrivia = this.toggleDropdownTrivia.bind(this);
        this.toggleDropdownSites = this.toggleDropdownSites.bind(this);
        this.extendNavBar = this.extendNavBar.bind(this);
    }

    componentDidMount(){
        document.addEventListener('click', e => {
            if(!document.querySelector(".dropdown").contains(e.target)){
                this.setState({
                    dropdown: false
                })
            }
        })
    }

    toggleDropdownTrivia(){
        this.setState({
            dropdownTrivia: !this.state.dropdownTrivia
        })
    }
    toggleDropdownSites(){
        this.setState({
            dropdownSites: !this.state.dropdownSites
        })
    }

    extendNavBar(){
        this.setState({
            extended: !this.state.extended
        })
    }


    render() { 
        return (
            <nav className='nav-bar'>
                <Link draggable="false" className='brand-logo' to="/home">
                        <img src={logo} alt="League's Trivia Logo"/>
                        <span>Trivia of Legends</span>
                </Link>
                <ul className='nav-bar-items' data-extended={this.state.extended}>
                <li className="dropdown">
                        <p class="dropdown-toggle" draggable="false" onClick={this.toggleDropdownTrivia} id="dropdown-toggle" >
                        Trivia Game
                        </p>
                        <div class="dropdown-menu" id='dropdown-menu' data-toggled={this.state.dropdownTrivia}>
                            <Link draggable="false" class="dropdown-item" 
                            to="/trivia">
                                Play
                            </Link>
                            {/* <div className="dropdown-divider"></div> */}
                            <Link draggable="false" class="dropdown-item" 
                            to="/submit-question">
                                Submit a question
                            </Link>
                        </div>
                    </li>
                    <div className="divider"></div>
                    <li className='item'>
                        <Link draggable="false" to="/champions">
                            <span>Champions</span>
                        </Link>
                    </li>
                    <div className="divider"></div>
                    <li className='item'>
                        <Link draggable="false" to="/regions">
                            <span>Regions</span>
                        </Link>
                    </li>
                    <div className="divider"></div>
                    <li className='item'>
                        <Link draggable="false" to="/about-the-game">
                            <span>What's LOL?</span>
                        </Link>
                    </li>
                    <div className="divider"></div>
                    <li className="dropdown">
                        <p class="dropdown-toggle" draggable="false" onClick={this.toggleDropdownSites} id="dropdown-toggle" >
                        Official Sites
                        </p>
                        <div class="dropdown-menu" id='dropdown-menu' data-toggled={this.state.dropdownSites}>
                            <a draggable="false" class="dropdown-item" 
                            target="_blank"  rel="noreferrer" 
                            href="https://www.leagueoflegends.com">
                                Game Site
                                <img className='inline-icon' src={newTab} alt="Open in a new Tab" />
                            </a>
                            {/* <div className="dropdown-divider"></div> */}
                            <a draggable="false" class="dropdown-item" 
                            target="_blank"  rel="noreferrer" 
                            href="https://universe.leagueoflegends.com/">
                                Universe 
                                <img className='inline-icon' src={newTab} alt="Open in a new Tab" />
                            </a>
                            {/* <div className="dropdown-divider"></div> */}
                            <a draggable="false" class="dropdown-item" 
                            target="_blank"  rel="noreferrer" 
                            href="https://arcane.com/">
                                Arcane 
                                <img className='inline-icon' src={newTab} alt="Open in a new Tab" />
                            </a>
                            {/* <div className="dropdown-divider"></div> */}
                        </div>
                    </li>
                </ul>
                <button draggable="false" onClick={this.extendNavBar}><img src={hamburguer} alt="expand menu" /></button>
            </nav>
          );
    }
}
 
export default NavBar;