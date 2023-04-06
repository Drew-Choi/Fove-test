/* eslint-disable no-undef */
//아래 것은 몽고db 아틀라스에서 my application에 들어가면 얻을 수 있음
//모두 붙여넣기 하고 여기까지만 남기고 지워버림
const { MongoClient, ServerApiVersion } = require('mongodb');
//.env에서 보안중인 깞을 구조분해할당으로 꺼내오기
const { MONGO_URL } = process.env;
//위에 구조분해할당한 몽고db아틀라스 고유 URL(MONGO_URL)을 아래와 같이 넣어줌
const client = new MongoClient(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
