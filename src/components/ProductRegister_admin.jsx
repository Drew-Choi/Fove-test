import React, { useEffect, useRef, useState } from 'react';
import '../styles/productRegister_admin.scss';
import axios from 'axios';

export default function ProductRegister_admin() {
  const pd_name = useRef();
  const pd_price = useRef();
  const pd_quantity = useRef();

  const newProductPost = async () => {
    console.log(pd_name.current.value);
    console.log(pd_price.current.value);
    console.log(pd_quantity.current.value);

    const newPdPostData = await axios.post(
      'http://localhost:4000/pd_register/add_pd',
      {
        name: pd_name.current.value,
        price: pd_price.current.value,
        quantity: pd_quantity.current.value,
      },
    );
    if (newPdPostData.status === 200) {
      console.log(await newPdPostData);
    } else {
      console.log(await newPdPostData);
    }
  };
  // useEffect(() => {
  //   const res = async () =>
  //     await axios.post('http://localhost4000/pd_register/add_pd', {
  //       name: newProduct.name,
  //       price: newProduct.price,
  //       quantity: newProduct.quantity,
  //     });
  //   res();
  //   console.log(res);
  // }, []);

  return (
    <section className="productRegister_admin">
      <div className="register_container">
        <div>
          <p>상품명</p>
          <input
            ref={pd_name}
            type="text"
            name="name"
            placeholder="상품이름을 입력해주세요"
          />
        </div>
        <div>
          <p>가격&nbsp;&nbsp;&nbsp;</p>
          <input
            ref={pd_price}
            type="number"
            name="price"
            placeholder="가격을 입력해주세요"
          />
        </div>
        <div>
          <p>수량&nbsp;&nbsp;&nbsp;</p>
          <input
            ref={pd_quantity}
            type="number"
            name="quantity"
            placeholder="재고수량을 입력해주세요"
          />
        </div>
        <button onClick={newProductPost}>등록</button>
      </div>
    </section>
  );
}
