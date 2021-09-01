import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import '../../Signup.css'

export function AnimalTest({ setIsState }) {
    const history = useHistory()

    const [yourPersonality,setyourPersonality] = useState('')
    const [isComplete,setIsComplete] = useState(false)
    const [personalityType,setPersonalityType] = useState(
        {
        1:'',
        2:'',
        3:'',
        4:'',
        }
    )
    const selectType = (type,i) => {
        setPersonalityType({...personalityType, [i]:type})
    }
    const back = (i) => {
        setPersonalityType({...personalityType, [i]:''})
    }
    const reset = () => {
        setPersonalityType({
            1:'',
            2:'',
            3:'',
            4:'',
        })
        setIsComplete(false)
    }
    const animal = (type) => {
        type = type[1]+type[2]+type[3]+type[4]
        const animalList = {
            ISTJ:'1여우',
            ISTP:'2곰',
            ISFJ:'3코뿔소',
            ISFP:'4고양이',
            INTJ:'5호랑이',
            INTP:'6독수리',
            INFJ:'7해파리',
            INFP:'8돼지',
            ESTJ:'9말',
            ESTP:'a기린',
            ESFJ:'b코끼리',
            ESFP:'c고래',
            ENTJ:'d사자',
            ENTP:'e달팽이',
            ENFJ:'f강아지',
            ENFP:'g캥거루'
        }
        setyourPersonality(animalList[type])
        setIsComplete(true)
    }
    const sendAnimalId = () => {
        axios
        .post(
             `${process.env.REACT_APP_API_URL}/user/animal`,
             {
                animal_name : parseInt(yourPersonality[0],16),
                user_id : ''
            },
            { withCredentials: true }
        )
        .then(()=>{
            history.push('/signup/success')
        })
        .catch(err => {
            alert(err)
        })
    }
    return (
        <container>
            {setIsState('two')}
            <article className={`questionContainer ${personalityType[1] !==''  ? 'hide' : ''}`}>
                <header>
                    <div></div> <br></br>
                    <div className="question">1번째 질문</div>
                </header>
                <section>
                    <h3>당심의 성향이 궁금합니다.</h3> <br></br>
                    <h3>당신은 내향적인편 입니까? 외향적인편 입니까?</h3> <br></br>
                    <div className="answerContainer">
                        <div onClick= {()=>selectType('E',1)} className ={`answer`}>외향적</div>
                        <div onClick= {()=>selectType('I',1)} className ={`answer`}>내향적</div>
                    </div>
                </section>
            </article>

            <article className={`questionContainer ${personalityType[2]!=='' || personalityType[1]==='' ? 'hide' : ''}`} >
                <header>
                    <div className="backToFront" onClick={()=>back(1)}>뒤로가기</div> <br></br>
                    <div className="question">2번째 질문</div>
                </header>
                <section>
                    <h3>당신은 감각적입니까? 직관적입니까?</h3> <br></br>
                    <div className="answerContainer">
                        <div onClick= {()=>selectType('N',2)} className ={`answer`} >직관적</div>
                        <div onClick= {()=>selectType('S',2)} className ={`answer`} >감각적</div>
                    </div>
                </section>
            </article>

            <article className={`questionContainer ${personalityType[3]!=='' || personalityType[2]==='' ? 'hide' : 'a'}`}>
                <header >
                    <div className="backToFront" onClick={()=>back(2)}>뒤로가기</div> <br></br>
                    <div className="question">3번째 질문</div>
                </header>
                <section>
                    <h3>당신은 감정적인가요? 아니면 이성적인가요</h3> <br></br>
                    <div className="answerContainer">
                        <div onClick= {()=>selectType('F',3)} className ={`answer`}>감정적</div>
                        <div onClick= {()=>selectType('T',3)} className ={`answer`}>이성적</div>
                    </div>
                </section>
            </article>

            <article className={`questionContainer ${personalityType[3]===''||isComplete ? 'hide' : 'a'}`}>
                <header>
                    <div className="backToFront" onClick={()=>back(3)}>뒤로가기</div> <br></br>
                    <div className="question">4번째 질문</div>
                </header>
                <section>
                    <h3>당신은 계획적으로 행동하나요 유동적으로 행동하나요?</h3> <br></br>
                    <div className="answerContainer">
                        <div onClick= {()=>selectType('P',4)} className ={`answer`}>유동적</div>
                        <div onClick= {()=>selectType('J',4)} className ={`answer`}>계획적</div>
                    </div>
                </section>
                <button className={`answer ${personalityType[4]===''?'hide':'a'}`} onClick = {()=>animal(personalityType) } >결과보기</button>
            </article>

            <article className={`questionContainer ${isComplete?'':'hide'}`}>
                <header>
                    <div className="backToFront" onClick={reset}>다시하기</div>
                </header>
                <section>
                    <h1>당신은</h1> <br></br>
                    <h1>{yourPersonality.slice(1)}</h1> <br></br>
                </section>
                <button className="signupButton" onClick={sendAnimalId} >제출하기</button>
            </article>
        </container>
    )
}