/* eslint-disable no-undef */
const express = require('express');
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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//라우터 연결
const productRegisterRouter = require('./routes/productRegister');
app.use('/pd_register', productRegisterRouter);

//포트 키기
app.listen(PORT, () => {
  console.log(`서버 ${PORT}포트에 연결 완료`);
});
