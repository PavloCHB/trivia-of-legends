import React from 'react'
import { Component } from 'react'

class Region extends Component {

    render() { 
        return (  
            <div className="region" id={this.props.id}>
                <h2 className='region-name'>{this.props.name}</h2>
                <div className='info'>{this.props.info}</div>
            </div>
        );
    }
}
 
export default Region;