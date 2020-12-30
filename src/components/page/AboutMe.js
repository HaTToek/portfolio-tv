import React, { Component } from 'react'
import '../../css/AboutMe.css'

class AboutMe extends Component {
    render() {
        return (
            <div className="AboutMe">
                <div className="MeContent">
                    <div className="about">
                        <div className="about_left">
                            <div className="Information">
                                <div className="information">
                                    이름 : 이호윤<br/>
                                    생년월일 : 2000.03.09 ( 남 )<br/>
                                    학과 : 컴퓨터 공학 ( 19학번 )<br />
                                    깃허브 : <a href="https://github.com/HaTToek" target="_blank" rel="noopener noreferrer" style={{color:"#FADA5E"}}>github.com/HaTToek</a>
                                </div>
                            </div>
                        </div>
                        <div className="Web">
                            <div className="web">
                                친구의 추천으로 시작하게 된 웹은 간단해 보이지만 생각할 것이 많았다<br />
                                웹을 처음 공부할 때는 그냥 내 화면을 기준으로 만들었는데 화면에 크기가 달라지면 처음 만들었을때와 달라진다는 것을 알았다.<br />
                                나혼자만 보는 것이 아니기 때문에 모바일과 웹에서는 어떻게 보일지, 화면에 크기가 다를때는 어떻게 할 것인지 생각을 갖게 되었다.<br />
                                웹에 대한 경험으로 '나한테 맞더라도 다른 사람한테는 다를 수 있다.' 라는 것을 다시 깨닫게 되었다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;