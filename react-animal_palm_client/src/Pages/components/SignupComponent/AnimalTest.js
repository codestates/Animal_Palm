import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import './AnimalTest.css'
export function AnimalTest({ setIsState }) {

    const [yourPersonality,setyourPersonality] = useState('')
    const [isComplete,setIsComplete] = useState(false)
    const [personalityType,setPersonalityType] = useState({
        1:'',
        2:'',
        3:'',
        4:'',
    })

    const history = useHistory()
    
    const selectType = (type,i) => {
        
        console.log(personalityType)
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
            ISTJ:'1거북이',
            ISTP:'2뱀',
            ISFJ:'3코뿔소',
            ISFP:'4고양이',

            INTJ:'5호랑이',
            INTP:'6올빼미',
            INFJ:'7판다',
            INFP:'8바다표범',

            ESTJ:'9늑대',
            ESTP:'a하이에나',
            ESFJ:'b코끼리',
            ESFP:'c돌고래',

            ENTJ:'d사자',
            ENTP:'e앵무새',
            ENFJ:'f강아지',
            ENFP:'g오랑우탄'
        }
        // console.log(type,animalList[type])
         setyourPersonality(animalList[type])
         setIsComplete(true)
    }

    const sendAnimalId = () => {
        axios
         .post(
             `http://localhost:4000/user/animal`,
             {
                animal_name : parseInt(yourPersonality[0],16),
                user_id : ''
            }
         ).then(()=>{
             history.push('/signup/success')
             setIsState('three')
         })
         .catch(err => {
            history.push('/signup/success')
            setIsState('three')
         })
    }
    return (
    <container>
        <article className={`questionContainer ${personalityType[1] !==''  ? 'hide' : ''}`}>
            <header>
                <div></div> <br></br>
                <div className="question">1번째 질문</div>
            </header>
            <section>
                <h3>길을가다 100만원이 떨어져있습니다</h3> <br></br>
                <h3>당신은 어떻게 하시겠습니까?</h3> <br></br>
                <div className="answerContainer">
                <div onClick= {()=>selectType('E',1)} className ={`answer`}>일단 줍는다</div>
                <div onClick= {()=>selectType('I',1)} className ={`answer`}>귀찮으니 그냥 지나친다</div>
                </div>
            </section>
        </article>

        <article className={`questionContainer ${personalityType[2]!=='' || personalityType[1]==='' ? 'hide' : ''}`} >
            <header>
                <div className="backToFront" onClick={()=>back(1)}>뒤로가기</div> <br></br>
                <div className="question">2번째 질문</div>
            </header>
            <section>
                <h3>길을가다 100만원이 떨어져있습니다</h3> <br></br>
                <h3>당신은 어떻게 하시겠습니까?</h3> <br></br>
                <div className="answerContainer">
                <div onClick= {()=>selectType('N',2)} className ={`answer`} >N</div>
                <div onClick= {()=>selectType('S',2)} className ={`answer`} >S</div>
                </div>
            </section>
        </article>

        <article className={`questionContainer ${personalityType[3]!=='' || personalityType[2]==='' ? 'hide' : 'a'}`}>
            <header >
                <div className="backToFront" onClick={()=>back(2)}>뒤로가기</div> <br></br>
                <div className="question">3번째 질문</div>
            </header>
            <section>
                <h3>길을가다 100만원이 떨어져있습니다</h3> <br></br>
                <h3>당신은 어떻게 하시겠습니까?</h3> <br></br>
                <div className="answerContainer">
                <div onClick= {()=>selectType('F',3)} className ={`answer`}>F</div>
                <div onClick= {()=>selectType('T',3)} className ={`answer`}>T</div>
                </div>
            </section>
        </article>

        <article className={`questionContainer ${personalityType[3]===''||isComplete ? 'hide' : 'a'}`}>
            <header>
                <div className="backToFront" onClick={()=>back(3)}>뒤로가기</div> <br></br>
                <div className="question">4번째 질문</div>
            </header>
            <section>
                <h3>길을가다 100만원이 떨어져있습니다</h3> <br></br>
                <h3>당신은 어떻게 하시겠습니까?</h3> <br></br>
                <div className="answerContainer">
                <div onClick= {()=>selectType('P',4)} className ={`answer`}>P</div>
                <div onClick= {()=>selectType('J',4)} className ={`answer`}>J</div>
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