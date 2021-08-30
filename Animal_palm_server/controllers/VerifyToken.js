const jwt = require('jsonwebtoken');
const Users = require('../models/').users;

module.exports = {
  verifyToken: async (req) => {
    const reqAccessToken = req.headers.cookie.split(';')[0].split('=')[1];
    const reqRefreshToken = req.headers.cookie.split(';')[1].split('=')[1];

    let accessData, refreshData;

    try { accessData = jwt.verify(reqAccessToken, process.env.ACCESS_SECRET); }
    catch(err) {
      //accessToken이 만료되었을 때
      try { refreshData = jwt.verify(reqRefreshToken, process.env.REFRESH_SECRET); }
      catch(err) {
        //refreshToken까지 만료되었을 때
        return [null, null];
      }
      //accessToken은 만료되었지만 refreshToken은 유효한 경우
      //-> accessToken 재발급
      //-> access는 유효하지만 그 사이에 refresh가 만료되었을 경우에 대비해 refresh도 재발급
      const curUser = await Users.findOne({ where: { id : refreshData.id } });
      const newPayload = { id: curUser.id };

      const newAccessToken = jwt.sign(newPayload, process.env.ACCESS_SECRET, { expiresIn : '1h' });
      const newRefreshToken = jwt.sign(newPayload, process.env.REFRESH_SECRET, { expiresIn : '14d' });
      return [newAccessToken, newRefreshToken];
    }
    //accessToken이 유효한 경우
    //-> accessToken이 발급되는 시점엔 항상 refreshToken도 함께 발급되기 때문에 항상 유효하다
    return [reqAccessToken, reqRefreshToken];
  },
  
  decodeToken: async (accessToken) => {
    //accessToken을 넘겨받아서 해당 토큰 안의 유저 정보를 return 해주는 함수

    const curUser = jwt.verify(accessToken, process.env.ACCESS_SECRET);
    const userData = await Users.findOne({ where: { id : curUser.id } })

    if(!userData) return null;
    else return userData;
  }
}