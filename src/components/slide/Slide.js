import React, { Component } from 'react'
import '../../css/Slide.css'

class Slide extends Component {
    render() {
        return (
            <div 
                className = 'slide'    
                data-active={this.props.offset === 0 ? true : null} 
                style={{ '--offset': this.props.offset}}
                >
                <div 
                    className = 'slideBackground'    
                    style={{backgroundImage: `url('${this.props.slide.image}')` }}
                />
                <div className = 'screen'/>
                <div className="slideContent">
                    <div className="slidecontent">
                        <div className="slideTitle">{this.props.slide.title}</div>
                        <div className="slideSubtitle">{this.props.slide.period}</div>
                        <div className="slideDescription">{this.props.slide.description}</div>
                        <a href="https://mynamelee.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="slideDescription rink">{this.props.slide.rink}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slide;