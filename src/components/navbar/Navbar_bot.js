import React, { Component } from 'react'
import '../../css/Navbar_bot.css'

class Navbar_bot extends Component {
    render() {
        return (
            <div className="navbar_bot" style={{transform:this.props.navbar}}>
                <div className="my_intro">
                    <div className="my">
                        <div>이름 : 이호윤</div>
                        <div>생년월일 : 2000.03.09</div>
                        <div>전화번호 : 010-9426-6153</div>
                    </div>
                </div>
                <div className="page_intro">
                    <div className="page">
                        <div>2020.12.23 ~ 2020.12.30</div>
                        <div>리액트로 만든 반응형 포트폴리오입니다.</div>
                        <div>집에 있는 티비의 모습에 영감을 받아 만들게 되었다.</div>
                    </div>
                </div>
                <div className="menu_bar">
                    <div className="menubtn" onClick={function(e){
                                    e.preventDefault(); 
                                    this.props.onChangeNavbar('translate(50vw,30vh)');
                                    }.bind(this)}>
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="menus">
                        <div className="menu" onClick={function(e){
                                    e.preventDefault();
                                    this.props.onChangeMode('home');
                                }.bind(this)}>
                                홈
                        </div>
                        <div className="menu" onClick={function(e){
                                    e.preventDefault();
                                    this.props.onChangeMode('about_me');
                                }.bind(this)}>
                                나에 대해
                        </div>
                        <div className="menu" onClick={function(e){
                                e.preventDefault();
                                this.props.onChangeMode('work');
                            }.bind(this)}>
                                해온일
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar_bot;
