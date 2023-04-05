import React, { useEffect, useRef, useState } from 'react';
import '../styles/productRegister_admin.scss';
import axios from 'axios';

export default function ProductRegister_admin() {
  const [newProduct, setNewProduct] = useState({});

  const pd_name = useRef();
  const pd_price = useRef();
  const pd_quantity = useRef();

  const onChangeNewProduct = () => {
    let addPoductObj = {
      name: pd_name.current.value,
      price: pd_price.current.value,
      quantity: pd_quantity.current.value,
    };
    setNewProduct((cur) => addPoductObj);
  };

  useEffect(() => {
    const res = async () =>
      await axios.post('http://localhost4000/pd_register/add_pd', {
        name: newProduct.name,
        price: newProduct.price,
        quantity: newProduct.quantity,
      });
    res();
    console.log(res);
  }, []);

  return (
    <section>
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
        <button onClick={onChangeNewProduct}>등록</button>
      </div>
    </section>
  );
}
