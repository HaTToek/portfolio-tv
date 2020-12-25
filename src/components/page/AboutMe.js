import React, { Component } from 'react'
import '../../css/AboutMe.css'

class AboutMe extends Component {
    render() {
        return (
            <div className="AboutMe">
                <div style={{width:'100%', height:'100%'}}>
                    <div className="about">
                        <div className="about_left">
                            <div className="empty">
                                <div className="think">
                                    무엇을 넣을지 고민되는 곳
                                </div>
                            </div>
                            <div className="Information">
                                <div className="information">
                                    이름 : 이호윤<br></br>
                                    생년월일 : 2000.03.09 ( 남 )<br></br>
                                    학과 : 컴퓨터 공학 ( 19학번 )
                                    
                                </div>
                            </div>
                        </div>
                        <div className="Web">
                            <div className="web">
                                웹에 대한 경험
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;