import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import image1 from '../../../images/01.jpg'
import image2 from '../../../images/02.jpg'
import image3 from '../../../images/03.jpg'

export const MainFrame = () => {
  const [index,setIndex] = useState(0);
  const [bodyOffset,setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  )
  const [scrollY,setScrollY] = useState(bodyOffset.top)
  const [randomPosts,setRandomPosts] = useState([])
  const loadRandomPosts = () => {
    axios
    .get(
      `${process.env.REACT_APP_API_URL}/main`,
      { withCredentials: true }
    )
    .then(data => {
      setRandomPosts(data.data.data.map(el=>{return (
        <div>
          <h4>{el.title}</h4>
          <div>{el.content}</div>
        </div>
        )} ))
    })
  }
  useEffect(()=>{
    loadRandomPosts()
  },[])

  

  const check = (scrollY)=>{
    if(scrollY < 970) setIndex(0)
    else if(scrollY < 1400) setIndex(1)
    else if(scrollY < 2000) setIndex(2)
  }
  const listener = e =>{
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    check(scrollY)
    //console.log(index)
    //console.log(document.body.childNodes[3].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[index].getBoundingClientRect())
  }
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });
  return (
    <div className='main-page'>
      <header className="header">
        <div className="global-width">
          <div className={scrollY <= 100?'tracking-in-expand page-title' : 'page-title'}>Animal Palm</div>
          {/* <div class="page-title">제목</div> */}
          <p>
            스크롤 해보세요!<br/>
            <div className='dir'>|</div>
          </p>
        </div>
      </header>  
	<section className="scroll-content">
		<div className="scroll-graphic">
			<div  className={index === 0 ? "graphic-item visivle" : "graphic-item"}><img className="scene-img" src={image1} alt="" /></div>
			<div  className={index === 1  ? "graphic-item visivle" : "graphic-item"}><img className="scene-img" src={image2} alt="" /></div>
			<div  className={index === 2  ? "graphic-item visivle" : "graphic-item"}> <img className="scene-img" src={image3} alt="" /></div>
			
		</div>
		<div className="scroll-text global-width">
			<div data-data="1" className="bubble">
				<p>
					간단한 설명
        </p>
			</div>
			<div className="bubble">
				<p>
          {randomPosts[0]}
				</p>
			</div>
			<div className="bubble">
				<p>
          {randomPosts[1]}
				</p>
			</div>
			<div className="bubble">
				<p>
          {randomPosts[2]}
				</p>
			</div>
			<div className="bubble">
				<p>
          {randomPosts[3]}
				</p>
			</div>
			<div className="bubble">
				<p>
          {randomPosts[4]}
				</p>
			</div>
		</div>
	</section>
	<section className="normal-content global-width">
		<h2>자세한 설명</h2>
		<p>원격근무 하시는 개발자 디자이너분들, 제주로 오세요. 진짜 좋아요. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ullam culpa ab, laborum repellat ut quae deleniti nostrum sapiente illum!</p>
		<h2>자세한 설명2</h2>
		<p>언택트(Untact)'란 '콘택트(contact: 접촉하다)'에서 부정의 의미인 '언(un-)을 합성한 말로, 기술의 발전을 통해 비대면으로 이루어지는 활동 경향을 의미한다. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam provident voluptatum numquam dolorum, quod odio.</p>
		<h2>내일은 어떤 모습일까</h2>
		<p>똑같겠지 다를게 있나 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui impedit numquam atque quidem quos facere obcaecati deleniti labore culpa esse nostrum dicta earum rem ducimus, voluptates eligendi voluptate exercitationem dolorem!</p>
	</section>	
    </div>
  );
};