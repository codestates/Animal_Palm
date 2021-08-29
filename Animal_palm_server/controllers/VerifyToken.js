const jwt = require('jsonwebtoken');

module.exports = {
  verifyToken: async (req) => {
    const reqAccessToken = req.headers.cookie.split(';')[0].split('=')[1];
    const reqRefreshToken = req.headers.cookie.split(';')[1].split('=')[1];

    let accessData, refreshData;

    try { accessData = jwt.verify(reqAccessToken, 'accessKey'); }
    catch(err) {
      //accessToken이 만료되었을 때
      try { refreshData = jwt.verify(reqRefreshToken, 'refreshKey'); }
      catch(err) {
        //refreshToken까지 만료되었을 때
        return [null, null];
      }

      //accessToken은 만료되었지만 refreshToken은 유효한 경우
      //-> access를 재발급해서 return
      //-> 간혹 access는 유효하지만 그 사이에 refresh가 만료되었을 경우를 방지하기 위해 refresh도 재발급
      const newPayload = {
        user_id: refreshData.user_id,
        animal_name: refreshData.animal_name,
        phone_number: refreshData.phone_number,
        createdAt: refreshData.createdAt,
        updatedAt: refreshData.updatedAt
      }

      const newAccessToken = jwt.sign(newPayload, 'accessKey', { expiresIn :'1h' });
      const newRefreshToken = jwt.sign(newPayload, 'refreshKey', { expiresIn : '14d' });
      return [newAccessToken, newRefreshToken];
    }

    //accessToken이 유효한 경우
    //-> accessToken이 발급되는 시점엔 항상 refreshToken도 함께 발급되기 때문에 항상 유효하다
    return [reqAccessToken, reqRefreshToken];
  }
}