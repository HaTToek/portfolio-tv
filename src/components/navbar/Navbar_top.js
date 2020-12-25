import React, { Component } from 'react'
import '../../css/Navbar_top.css'

class Navbar_top extends Component {
    render() {
        return (
            <div className = 'navbar_top'>
                <div className="title_bar">
                    <div className="title">{ this.props.title }</div>
                    <div className="subtitle">
                        <div style={{cursor: 'pointer'}} onClick={function(e){
                                e.preventDefault();
                                this.props.onChangeNavbar('translate(0,0)');
                            }.bind(this)}>button</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar_top;