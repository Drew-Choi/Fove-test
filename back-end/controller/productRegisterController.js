/* eslint-disable no-undef */
const mongoClinet = require('./mongoConnect');

const newProductAdd = async (req, res) => {
  try {
    const client = await mongoClinet.connect();
    const product = client.db('FOVE').collection('PRODUCTS');
    await product.insertOne(req.body);
    res.status(200).json('방문자 수 업데이트 성공');
  } catch (err) {
    console.error(err);
    res.status(500).json('테이터 삽입 실패, 알 수 없는 문제 발생');
  }
};

module.exports = { newProductAdd };
