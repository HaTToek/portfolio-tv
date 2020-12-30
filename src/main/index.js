import React, { Component } from 'react'
import Intro from '../components/Intro'
import Navbar_bot from '../components/navbar/Navbar_bot'
import Navbar_top from '../components/navbar/Navbar_top'
import AboutMe from '../components/page/AboutMe'
import Work from '../components/page/Work'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            mode : 'home',
            navbar : 'translate(50vw,30vh)',
            subtitle : [
                { title : '이호윤 포트폴리오', page: '홈'},
                { title : '이호윤 포트폴리오', page: '나에 대해'},
                { title : '이호윤 포트폴리오', page: '해온 일'},
            ]
        }
    }
    getContent(){
        var _article = null;
        if(this.state.mode === 'home'){
            _article = <Intro></Intro>
        } else if(this.state.mode === 'about_me'){
            _article = <AboutMe></AboutMe>
        } else if(this.state.mode === 'work'){
            _article = <Work></Work>
        }
        return _article 
    }
    getNavbar_top(){
        var _title ,_subtitle = null;
        if(this.state.mode === 'home'){
            _title = this.state.subtitle[0];
        } else if(this.state.mode === 'about_me'){
            _title = this.state.subtitle[1];
        } else if(this.state.mode === 'work'){
            _title = this.state.subtitle[2];
        }
        _subtitle = <Navbar_top navbar={this.state.navbar} title={_title} onChangeNavbar = {function(_navbar){
            this.setState({
                navbar : _navbar
        });
        }.bind(this)}></Navbar_top>
        return _subtitle;
    }
    getNavbar_bot(){
        var _navbar = 'translate(0,0)';
        var _navbar_bot = null;
        _navbar = this.state.navbar;
        _navbar_bot = <Navbar_bot navbar = {_navbar} onChangeMode = {function(_mode){
            this.setState({
                mode : _mode,
                });
            }.bind(this)}
            onChangeNavbar = {function(_navbar){
                this.setState({
                    navbar : _navbar
            });
            }.bind(this)}> </Navbar_bot>
        return _navbar_bot;
    }
    render() {
        return (
            <div>
                {this.getContent()}
                {this.getNavbar_top()}
                {this.getNavbar_bot()}
            </div>
        );
    }
}

export default Main;