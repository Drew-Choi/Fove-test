/* eslint-disable no-undef */
//익스프레스 임폴트
const express = require('express');
//cors 임폴트
const cors = require('cors');
//보안용 dotenv 임폴트 설정
require('dotenv').config();

//포트번호 .env파일로 로드
const { PORT } = process.env;

//express활성화
const app = express();
// cors활성화
app.use(cors());
//바디파서 설정 및 활성화
//이 아래 2개가 설정되어야 axios로 날린 데이터를 서벅가 req.body로 받을 수 있다.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//라우터 연결
//라우터 구성을 localhost:4000/pd_register/pd_add 로 하였다. 첫번재 라우터 연결.
//해당 JS파일 임폴트 하고 연결
const productRegisterRouter = require('./routes/productRegister');
app.use('/pd_register', productRegisterRouter);

//포트 연결
app.listen(PORT, () => {
  console.log(`서버 ${PORT}포트에 연결 완료`);
});
