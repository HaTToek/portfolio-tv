import React, { Component } from 'react'
import '../../css/Navbar_top.css'


class Navbar_top extends Component {
    render() {
        return (
            <div className = 'navbar_top'>
                <div className="title_bar">
                    <div className="title">{ this.props.title.title }</div>
                    <div className="subtitle">
                        <i 
                            className={`${this.props.navbar ==='translate(0,0)' ? 'fas fa-times' :'fas fa-bars'}`} 
                            style={{cursor: 'pointer'}} 
                            onClick={function(e){
                                e.preventDefault();
                                if(this.props.navbar ==='translate(0,0)'){
                                    this.props.onChangeNavbar('translate(50vw,30vh)');
                                }else {
                                    this.props.onChangeNavbar('translate(0,0)');
                                }
                            }.bind(this)}></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar_top;