import React, { Component } from 'react'
import { Spring, animated } from 'react-spring/renderprops'
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
                { title : '이호윤 포트폴리오', desc: 'test1-1'},
                { title : 'test2', desc: 'test2-1'},
                { title : 'test3', desc: 'test3-1'},
                { title : 'test4', desc: 'test4-1'},
            ]
        }
    }
    getContent(){
        var _article = null;
        if(this.state.mode === 'home'){
        //     _article = <Spring
        //     from={{
        //         transform:
        //           'translate3d(400px,0,0) scale(2) rotateX(90deg)',
        //         }}
        //       to={{
        //         transform:
        //           'translate3d(0px,0,0) scale(1) rotateX(0deg)',
        //         }}>
        //     {props => <Intro style={props}></Intro>}
        //   </Spring>
        _article = <Intro></Intro>
        } else if(this.state.mode === 'about_me'){
            _article = <AboutMe></AboutMe>
        }else if(this.state.mode === 'work'){
            _article = <Work></Work>
        }
        return _article 
    }
    getNavbar_top(){
        var _title, _desc ,_subtitle = null;
        if(this.state.mode === 'home'){
            _title = this.state.subtitle[0].title;
            _subtitle = <Navbar_top title={_title} onChangeNavbar = {function(_navbar){
                this.setState({
                    navbar : _navbar
            });
            }.bind(this)}/>
        } else if(this.state.mode === 'about_me'){
            _title = this.state.subtitle[1].title;
            _subtitle = <Navbar_top title={_title} onChangeNavbar = {function(_navbar){
                this.setState({
                    navbar : _navbar
            });
            }.bind(this)}/>
        } else if(this.state.mode === 'work'){
            _title = this.state.subtitle[2].title;
            _subtitle = <Navbar_top title={_title} onChangeNavbar = {function(_navbar){
                this.setState({
                    navbar : _navbar
            });
            }.bind(this)}/>
        } else if(this.state.mode === 'contact'){
            _title = this.state.subtitle[3].title;
            _subtitle = <Navbar_top title={_title} onChangeNavbar = {function(_navbar){
                this.setState({
                    navbar : _navbar
            });
            }.bind(this)}/>
        }
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
            }.bind(this)}/>
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