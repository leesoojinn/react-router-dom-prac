import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Product() {
  // URL Parameter
  const { id } = useParams();

  // useState로 초기값 설정
  const [products, setProducts] = useState([
    {
      이름: "멋진 바지",
      가격: 20000,
      옵션: ["28", "30", "32"],
      좋아요수: "100개",
    },
    {
      이름: "멋진 셔츠",
      가격: 10000,
      옵션: ["small", "medium", "large"],
      좋아요수: "200개",
    },
    {
      이름: "멋진 신발",
      가격: 30000,
      옵션: ["230", "240", "250", "260", "270"],
      좋아요수: "300개",
    },
  ]);

  // 옵션 선택한 것 화면에 보이기
  const [selectedOption, setSelectedOption] = useState("");

  // 현재 구현된 상품 페이지에서 해당 상품의 정보를 가져온다.
  // URL Parameter 'id'를 기반으로 products 배열에서 해당 상품을 찾아올 수 있다.
  const product = products[id - 1];

  // 배열에 id: 1 이런 씩으로 추가해야한다.
  // const product = products.find(item => item.id === id)

  // 옵션 선택 핸들러
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            {/* id 값 추가 , 해당 상품 누를때 그 상품 번호가 뜬다. => 상품 {id} */}
            {/* 이름을 가져와서 보여준다 */}
            {product.이름}
          </div>
          <div>
            <Link to={"/products"}>뒤로가기</Link>
            {/* 보여주고 싶은 정보를 입력 */}
            <h3>가격: {product.가격}</h3>
            <h3>좋아요: {product.좋아요수}</h3>
            <h3>구매옵션</h3>
            {/* <h3>가격: ~~~~</h3>
            <h3>좋아요: ~~~~</h3>
            <h3>구매옵션</h3> */}
            <select
              style={{
                width: "100px",
              }}
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="">선택하세요</option>
              {product.옵션.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
              {/* 옵션를 index로 가져오기 */}
              {/* <option>{product.옵션[0]}</option>
              <option>{product.옵션[1]}</option>
              <option>{product.옵션[2]}</option> */}
            </select>
            {/* 옵션에서 고른 것 화면에 보이기!! */}
            <div>구매옵션: {selectedOption} </div>
          </div>
        </div>
      </div>
    </>
  );
}
