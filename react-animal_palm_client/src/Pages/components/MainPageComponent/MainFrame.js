import React, { useEffect, useState } from 'react';
import { Link,useHistory } from 'react-router-dom'
import image1 from '../../../images/04.jpg'
import image2 from '../../../images/05.jpg'
import image3 from '../../../images/06.jpg'
import axios from 'axios'

export const MainFrame = ({
  isLogin,
  handleLogout
}) => {
  const history = useHistory()
  const [index,setIndex] = useState(0);
  const [bodyOffset,setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  )
  const [scrollY,setScrollY] = useState(bodyOffset.top)
  const [contents,setConents] = useState([])
  

  const check = (scrollY)=>{
    console.log(scrollY)
    if(scrollY < 850) setIndex(0)
    else if(scrollY < 1500) setIndex(1)
    else if(scrollY < 2000) setIndex(2)
  }
  const listener = e =>{
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    check(scrollY)
  }
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });
    useEffect(()=>{
      loadContentList()
    },[])

  const loadContentList = () => {
        axios
        .get(
            `${process.env.REACT_APP_API_URL}/main`,
            { withCredentials: true }
        )
        .then(data => {
            console.log(data.data)
            setConents(data.data.data)
        })
        .catch((err)=>{
              alert(err)
        })
    }

  return (
    <>
    <header>
      {isLogin? <div className='welcome' onClick={()=>history.push('/board')}>
                동물친구 만나러 가기
                  </div> : null}
    </header>
  <div className='main-page'>
    
	<section className="scroll-content">
		<div className="scroll-graphic">
			<div  className={index === 0 ? "graphic-item visivle" : "graphic-item"}><img className="scene-img" src={image1} alt="" /></div>
			<div  className={index === 1  ? "graphic-item visivle" : "graphic-item"}><img className="scene-img" src={image2} alt="" /></div>
			<div  className={index === 2  ? "graphic-item visivle" : "graphic-item"}> <img className="scene-img" src={image3} alt="" /></div>
			
		</div>
		<div className="scroll-text global-width">
			<div data-data="1" className="bubble">
				<p>
        <br></br>
        간단한테스트로 통해서 당신의 동물이 무엇인지 찾아보아요!!
        <br></br><br></br>
        혹시 '나와 같은 동물을 찾고 싶어' 라는 생각이 들었던 적이 있나요?
        <br></br><br></br>
        당신의 동물 당신의 동물친구을 찾아서 서로 소통 해봐요
        <br></br><br></br>
        </p>
			</div>
      {contents.map((el,idx)=>{
        return(<div key={idx} className="bubble"> <p>{el.title} -{el.animalId}</p></div>)
      })}
			<div className="bubble"><p>당신의 발자국을 남겨주세요</p></div>
		</div>
	</section>
	<section className="normal-content global-width">
	<h2>나는 어떤 동물일까?</h2>
            <p>간단한 테스트를 통해 당신은 어떤 동물인지 알아보세요!<br></br><br></br> 같은 동물들끼리 이야기를 나눌 수 있어요.</p>
        <h2>동물친구들을 찾아 보아요!</h2>
            <p>모든 동물친구들이 모이는 게시판에서 동물친구들과 도란도란 함께 이야기 나눠요~<br></br> <br></br>동물마다 게시판이 있어요. 다른 동물들은 엿 볼 수 없으니 안심하세요!</p>
	</section>	
    </div>

    </>
  );
};