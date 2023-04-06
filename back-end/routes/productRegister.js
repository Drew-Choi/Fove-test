/* eslint-disable no-undef */
//익스프레스 임폴트
const express = require('express');
//익스프레스의 라우터기능 활성화
const router = express.Router();

//다음 라우터 겸 데이터 처리할 미들웨어 임폴트
const { newProductAdd } = require('../controller/productRegisterController');

//라우터 연결 및 요청정보(get, post등) 설정
//주소 뒤에는 미들웨어 임폴트 한 것
router.post('/add_pd', newProductAdd);

//익스폴트 할 것-> app.js의 서버 실행 js에서 임폴트해서 설정함
module.exports = router;
