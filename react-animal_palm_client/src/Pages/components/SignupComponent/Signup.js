
import axios from "axios"
import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { checkPassword, checkEmail, checkId, checkPhone } from "../../function/Validatior"
import './Signup.css'

export function SignupComponent ({ setIsState,moveLogin }) {
  require('dotenv').config()
    const [signupInfo,setSignupInfo] = useState({
        id:'',
        password:'',
        checkPassword:'',
        email:'',
        mobile:''
      })

      const history = useHistory()
    
      const handleInputValue = (key) => (e) => {
        setSignupInfo({...signupInfo, [key]: e.target.value })
      }
    
      const signupHandler = () => {
        if(signupInfo.id===''|| signupInfo.password===''){
          alert('아이디와 패스워드는 필수 입니다.')
        }
        else if(!checkId(signupInfo.id)){
          alert('아이디는 5~15자 영어 대소문자, 숫자, 특수기호(!@^*_-.)만 사용 가능합니다. (공백 불가)')
        }
        else if(!checkPassword(signupInfo.password)){
          alert('비밀번호는 최소 8자 이상이면서, 알파벳과 숫자 및 특수문자(@$!%*#?&)하나 이상을 포함해햐합니다.')
        }
        else if(!(signupInfo.password===signupInfo.checkPassword)){
          alert('비밀번호와 비밀번호 재확인이 서로 다릅니다.')
        }
        else if(!checkEmail(signupInfo.email)){
          alert('이메일 형식이 아닙니다.')
        }
        else if(!checkPhone(signupInfo.mobile)){
          alert('000-000-0000 혹은 000-0000-0000형식으로 작성해주십시오.')
        }
        else{
        axios
          .post(
            `${process.env.REACT_APP_API_URL}/user/signup`,
            {
              id: signupInfo.id,
              password: signupInfo.password,
              email: signupInfo.email,
              phonenumber: signupInfo.mobile
            }
            ,{ withCredentials: true }
          )
          .then(data =>{
            history.push('/signup/animalTest')
          })
          .catch(err => {
           
            history.push('/signup/animalTest')
            alert(err)
          })
        }
      }

      const validExistId = () => {
        axios
         .post(
           `${process.env.REACT_APP_API_URL}/user/userid`,
           {
             id: signupInfo.id
           },
           { withCredentials: true }
         ).then(data=>{
           alert(data.data.message)
           
         })
         .catch(err=>{
           alert(err)
         })
      }
    
      return (
        
<center>
  {setIsState('one')}
  <h1>회원가입</h1>
  <form>
  <div>
    <label>아이디</label>
    <div className="idInput">
      <input className="signupInput id" onChange={handleInputValue('id')} value={signupInfo.id} />
      <span className="idCheck" onClick={validExistId}>
      중복검사
      </span>
      <div className="hide">
      5~15자 영어 대소문자, 숫자, 특수기호(!@^*_-.)만 가능 (공백 불가)
      </div>
      <div className="hide">
      사용할 수 있는 아이디입니다.
      </div>
    </div>
  </div>
  <div>
    <label>비밀번호</label>
    <div>
      <input className="signupInput" type='password' onChange={handleInputValue('password')} value={signupInfo.password}/>
    </div>
  </div>
  <div>
    <label>비밀번호 재확인</label>
    <div>
      <input className="signupInput" type='password' onChange={handleInputValue('checkPassword')} value={signupInfo.checkPassword}/>
    </div>
  </div>
  <div>
    <label>이메일</label>
    <div>
      <input className="signupInput" type='email' onChange={handleInputValue('email')} value={signupInfo.email}/>
    </div>
  </div>
  <div>
    <label>전화번호</label>
    <div>
      <input className="signupInput" type='tel' onChange={handleInputValue('mobile')} value={signupInfo.mobile}/>
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