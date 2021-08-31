// [비밀번호 유효성 검사]: 최소 8자 이상하면서, 알파벳과 숫자 및 특수문자(@$!%*#?&) 는 하나 이상 포함
export const checkPassword = (str) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}

// [이메일 검증 함수]: 아이디@이메일 유형이 맞는지 확인 (공백 불가)
export const checkEmail = (str) => {
  return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(str)
}

// [아이디 검증 함수]: 5~15자 영어 대소문자, 숫자, 특수기호(!@^*_-.)만 가능 (공백 불가)
export const checkId = (str) => {
  return /^[a-zA-Z0-9!@^*-_.]{5,15}$/.test(str)
}

// [전화번호 검증 함수]: 000-000-0000 혹은 000-0000-0000만 가능(가운데 3개 혹은 4개)
// [전화번호 검승 함수 수정] : 숫자 10자리 혹은 11자리 가능
export const checkPhone = (str) => {
  // return /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}/.test(str)
  return /^\d{10,11}$/.test(str)
}