import React from 'react'
import { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/nav';

import '../components/home.css'

class Home extends Component {

    render() { 
        return (  
            <>
                <NavBar/>
                <div className="container">
                    <h2>Welcome to</h2>
                    <h1>Trivia of Legends</h1>
                    <div className="routes">
                        <Link id="trivia" to="/trivia">
                            <h2>Trivia</h2>
                        </Link>
                        <Link id="champions" to="/champions">
                            <h2>Champions </h2>
                        </Link>
                        <Link daggable="none"  id="regions" to="/regions">
                            <h2>Regions </h2>
                        </Link>
                       
                    </div>
                    
                </div>
            </>
        );
    }
}
 
export default Home;