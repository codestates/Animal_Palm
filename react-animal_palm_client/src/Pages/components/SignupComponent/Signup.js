
import axios from "axios"
import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { hash } from "../../function/Hasing"
import { checkPassword, checkEmail, checkId, checkPhone } from "../../function/Validatior"
import '../../Signup.css'

export function SignupComponent ({ setIsState,moveLogin }) {
  const history = useHistory()

  const [signupInfo,setSignupInfo] = useState(
    {
        id:'',
        password:'',
        checkPassword:'',
        email:'',
        mobile:''
    }
  )
  const [isValid,setIsValid] = useState(
    {
      id:false,
      signupButtonId:false,
      validButton:false,
      signupButtonPwd:false,
      signupButtonCheckPwd:false,
      signupButtonEmail:false,
      signupButtonPhoneNumber:false
    }
  )

  const handleInputValue = (key) => (e) => {
    setSignupInfo({...signupInfo, [key]: e.target.value })
  }
  const signupHandler = () => {
    if(signupInfo.id===''|| signupInfo.password===''){
      setIsValid({...isValid,signupButtonId:true, signupButtonPwd:true})
    }
    else if(!checkId(signupInfo.id)){
      setIsValid({...isValid,signupButtonId:true})
    }
    else if(!isValid.validButton){
      alert('중복검사를 해주세요')
    }
    else if(!checkPassword(signupInfo.password)){
      setIsValid({...isValid,signupButtonPwd:true})
    }
    else if(!(signupInfo.password===signupInfo.checkPassword)){
      setIsValid({...isValid,signupButtonCheckPwd:true})
    }
    else if(!checkEmail(signupInfo.email)){
      setIsValid({...isValid,signupButtonEmail:true})
    }
    else if(!checkPhone(signupInfo.mobile)){
      setIsValid({...isValid,signupButtonPhoneNumber:true})
    }
    else{
      axios
      .post(
        `${process.env.REACT_APP_API_URL}/user/signup`,
        {
          userId: signupInfo.id,
          password: hash(signupInfo.password),
          email: signupInfo.email,
          phoneNumber: signupInfo.mobile
        },
        { withCredentials: true }
      )
      .then(() =>{
        history.push({pathname:'/signup/animalTest',state:{userId:signupInfo.id}})
      })
      .catch(err => {
        alert(err)
      })
    }
  }
  const validExistId = () => {
    axios
    .post(
      `${process.env.REACT_APP_API_URL}/user/userid`,
      {
        userId: signupInfo.id
      },
      { withCredentials: true }
    )
    .then(()=>{
      setIsValid({...isValid,id:true,validButton:true})
    })
    .catch(()=>{
      setIsValid({...isValid,id:false,validButton:true})
    })
  }
  return (
    <center>
      {setIsState('one')}
      <h1>회원가입</h1>
      <form>
        <div>
          <label className="signupLabel">아이디</label>
          <div className="idInput">
            <input className="signupInput id" onChange={handleInputValue('id')} value={signupInfo.id} />
            <span className="idCheck" onClick={validExistId}>
              중복검사
            </span>
            <div className={`red ${!isValid.id && isValid.validButton ? '' : "hide"}`}>이미 존재하는 아이디입니다.</div>
            <div className={`green ${checkId(signupInfo.id) && isValid.id ? '' : "hide"}`}>사용할 수 있는 아이디입니다.</div>
            <div className={`red ${!checkId(signupInfo.id) && (signupInfo.id!==''||isValid.signupButtonId)? '' : "hide"}`}>
              아이디는 5자이상 영문혹은 숫자이고 공백이 없어야합니다.
            </div>
          </div>
        </div>
        <div>
          <label className="signupLabel">비밀번호</label>
          <div>
            <input className="signupInput" type='password' onChange={handleInputValue('password')} value={signupInfo.password}/>
          </div>
          <div className={`red ${!checkPassword(signupInfo.password) && (signupInfo.password!==''||isValid.signupButtonPwd) ? '' : "hide"}`}>
            비밀번호는 8자 이상이고 특수문자,숫자,영어가 포함되어야합니다.</div>
          </div>
        <div>
          <label className="signupLabel">비밀번호 재확인</label>
          <div>
            <input className="signupInput" type='password' onChange={handleInputValue('checkPassword')} value={signupInfo.checkPassword}/>
          </div>
          <div className={`red ${signupInfo.password!==signupInfo.checkPassword &&
            (signupInfo.checkPassword !== '' || isValid.signupButtonCheckPwd) ? '' : "hide"}`}>
            비밀번호가 일치하지 않습니다.
          </div>
          <div className={`green ${signupInfo.password===signupInfo.checkPassword &&
            signupInfo.checkPassword !== '' ? '' : "hide"}`}>
            비밀번호가 일치합니다.
          </div>
        </div>
        <div>
          <label className="signupLabel">이메일</label>
          <div>
            <input className="signupInput" type='email' onChange={handleInputValue('email')} value={signupInfo.email}/>
          </div>
          <div className={`red ${!isValid.signupButtonEmail || checkEmail(signupInfo.email)? "hide" : ''}`}>
            이메일의 형식(***@***)이어야 합니다.
          </div>
        </div>
        <div>
          <label className="signupLabel">전화번호</label>
          <div>
            <input className="signupInput" type='tel' onChange={handleInputValue('mobile')} value={signupInfo.mobile}/>
          </div>
          <div className={`red ${!isValid.signupButtonPhoneNumber || checkPhone(signupInfo.mobile)? "hide" : ''}`}>
            휴대전화번호를 입력해주세요.
          </div>
        </div>           
        <div>
          <Link onClick={moveLogin}>
            이미 아이디가 있으신가요?
          </Link>
        </div>
      </form>
      <button className="signupButton" onClick={signupHandler} >
        회원가입
      </button>
    </center>
  )
}