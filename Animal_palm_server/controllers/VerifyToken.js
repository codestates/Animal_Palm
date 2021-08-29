const jwt = require('jsonwebtoken');
const Users = require('../models/').users;

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
      //-> accessToken 재발급
      //-> access는 유효하지만 그 사이에 refresh가 만료되었을 경우에 대비해 refresh도 재발급
      const curUser = await Users.findOne({ where: { id : refreshData.id } });
      const newPayload = { id: curUser.id };

      const newAccessToken = jwt.sign(newPayload, 'accessKey', { expiresIn : '1h' });
      const newRefreshToken = jwt.sign(newPayload, 'refreshKey', { expiresIn : '14d' });
      return [newAccessToken, newRefreshToken];
    }
    //accessToken이 유효한 경우
    //-> accessToken이 발급되는 시점엔 항상 refreshToken도 함께 발급되기 때문에 항상 유효하다
    return [reqAccessToken, reqRefreshToken];
  }
}