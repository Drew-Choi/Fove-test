/* eslint-disable no-undef */
//몽고DB 커넥터를 임폴트(mongo에서 첫 m이 대문자가 아닌 소문자임에 주의)
const mongoClinet = require('./mongoConnect');

//미들웨어 생성하기
const newProductAdd = async (req, res) => {
  try {
    //몽고db접속하기(접속시에만 시간이 걸림)
    const client = await mongoClinet.connect();
    //접속한 몽고db의 db를 찾고, 그 하위메뉴인 컬렉션을 찾음(혹은 연결)
    const product = client.db('FOVE').collection('PRODUCTS');
    //몽고db가 처리할 내용 입력(처리 시간이 걸리니 await사용)
    //req.body가 axios로 받은 데이터임 그걸 넣어주면 됨
    //몽고db는 객체를 통으로 넣어도 전혀 문제가 안됨
    await product.insertOne(req.body);
    //요청 처리가 성공적으로 이루어졌다면 성공 메시지 띄움
    res.status(200).json('방문자 수 업데이트 성공');
  } catch (err) {
    //에러났을 시에 문구 띄우는 곳 -> 이 부분이 프론트 axios의 콘솔로그로 들어감
    console.error(err);
    res.status(500).json('테이터 삽입 실패, 알 수 없는 문제 발생');
  }
};

//해당 미들웨어 빼주기
module.exports = { newProductAdd };
