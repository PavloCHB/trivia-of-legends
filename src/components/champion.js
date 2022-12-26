import React from 'react';
import { Component } from 'react';
import CloseIcon from '../assets/close.svg'
import GoingOutIcon from '../assets/going-out.svg'
import Reload from '../assets/reload.svg'

class Champion extends Component {

    render() { 
        return ( 
            <>
                <div className="champion" id={this.props.id} onClick={this.props.clicked}>
                    <div className="champion-colapsed">
                        <figure>
                            <img draggable="none" className='load' src={Reload} alt="Loading" />
                            <img draggable="none" src={this.props.icon} alt={this.props.alt} />
                        </figure>
                        <p>{this.props.name}</p>
                    </div>
                    <div className='champion-extended'>
                        <button><a href={this.props.championPageRoute} target="_blank" rel="noreferrer"><img src={GoingOutIcon} alt="Open champion official page" /></a></button>
                        <button className='close-btn' onClick={this.props.closeButton}><img src={CloseIcon} alt="Close" /></button>
                        <span>{this.props.name}</span>
                        <p className='title'>{this.props.title}</p>
                        <img draggable="none" src={this.props.image} alt={this.props.alt} loading="lazy"/>
                        <p className='role'>{this.props.roleLang + ": " + this.props.role}</p>
                        <p>{this.props.lore}</p>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Champion;