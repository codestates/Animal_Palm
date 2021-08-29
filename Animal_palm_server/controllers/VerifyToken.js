const jwt = require('jsonwebtoken');

module.exports = {
  verifyToken: async (req) => {
    const reqAccessToken = req.headers.cookie.split(';')[0].split('=')[1];
    const reqRefreshToken = req.headers.cookie.split(';')[1].split('=')[1];
  
    //accessToken이 유효한지 먼저 검증
    jwt.verify(reqAccessToken, 'accessKey', async (err, data) => {
      if(err) {
        //1. accessToken이 유효하지 않을 경우
        //-> refresh도 검증해봄
        jwt.verify(reqRefreshToken, 'refreshKey', async (err, data) => {
          if(err) {
            //1-1. refresh도 유효하지 않음
            //-> 아무 토큰도 넘겨주지 않는다
            return [null, null];
          }
          else {
            //1-2. access는 만료됐지만 refresh는 유효한 경우
            //-> access도 재발급해서 같이 넘겨줌
            //-> 간혹 access는 유효한데 그 사이에 refresh가 만료됐을 경우를 방지하기 위해 refresh도 재발급
  
            const newAccessToken = jwt.sign(data, 'accessKey', { expiresIn : '1h' });
            const newRefreshToken = jwt.sign(data, 'refreshKey', { expiresIn : '14d' });
            return [newAccessToken, newRefreshToken];
          }
        })
      }
      else {
        //2. accessToken이 유효한 경우
        //-> accessToken이 발급되는 시점에는 refreshToken도 함께 발급되므로 refreshToken은 항상 유효하다
        return [reqAccessToken, reqRefreshToken];
      }
    })
  }
}