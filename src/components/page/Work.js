import React, { Component } from 'react'
import Slide from '../slide/Slide'
import '../../css/Work.css'
import img1 from '../../img/first-portfolio.png'
import img2 from '../../img/insta-clone.png'
import img3 from '../../img/netflix-clone.png'

class Work extends Component {
    constructor(props){
    super(props);
    this.state = {
        slideIndex: 0,
        slides : [
            {
              title: "처음만든 포트폴리오",
              period: "2020.10.01 ~ 2020.10.22",
              description: "카드컨셉으로 만든 포트폴리오로 React를 공부하기전에 만들었다. 백엔드기능을 추가해 프로잭트 한것을 추가하고 삭제 할 수 있다.",
              rink:"https://mynamelee.herokuapp.com/",
              image:img1
            },
            {
              title: "인스타 클론코딩",
              period: "2020",
              description: "HTML과 CSS를 처음 접하고나서 만든 클론코딩이다. 나중에 백엔드를 배운뒤 만들어둔 프론트엔드에 백엔드를 합쳐서 만들었다",
              image:img2
            },
            {
              title: "넷플리스 클론코딩",
              period: "2020.10.31 ( 4시간 )",
              description: "React공부를 하면서 처음 시작한 프로잭트로 유트브로 공부하여 제작하였다",
              image:img3
            },
          ]
        }
    }
    getSlideWork(){
        var work = null;
        work = <div className="slides">
            <i className="fas fa-angle-left" onClick={function(){
                this.setState({
                    slideIndex : this.state.slideIndex === 0 ? this.state.slides.length - 1 : this.state.slideIndex - 1
            });
            }.bind(this)}></i>
            {[...this.state.slides, ...this.state.slides, ...this.state.slides].map( (slide, i) => {    
            let offset = this.state.slides.length + (this.state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i}></Slide>
            })}
            <i className="fas fa-angle-right" onClick={function(){
                this.setState({
                    slideIndex : (this.state.slideIndex +1) % this.state.slides.length
            });
            }.bind(this)}></i>
        </div>
        return work;
    }
    render() {
        return (
            <div className="Work" >
                <div className="works" style={{backgroundImage: `url('${this.state.slides[this.state.slideIndex].image}')`}}>
                    {this.getSlideWork()}
                </div>
            </div>
        );
    }
}

export default Work;