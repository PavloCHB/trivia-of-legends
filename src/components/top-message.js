import React from 'react';
import { Component } from 'react';
import './top-message.css'
import WarningIcon from '../assets/warning.svg'
import CloseIcon from '../assets/close.svg'

class TopMessage extends Component {
    constructor(props){
        super(props);
        
        this.closeWarning = this.closeWarning.bind(this)
    }

    closeWarning(){
        document.querySelector(".top-message").classList.add("display-none")
    }

    render() { 
        return ( 
            <div className="top-message">
                <img src={WarningIcon} alt="Warning" />
                <p>{this.props.message}</p>
                <button onClick={this.closeWarning}><img src={CloseIcon} alt="Close" /></button>
            </div>
         );
    }
}
 
export default TopMessage;