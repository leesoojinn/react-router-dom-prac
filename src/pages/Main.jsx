import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Main() {
  const [products, setProducts] = useState([
    {
      이름: "멋진 바지",
      가격: 20000,
    },
    {
      이름: "멋진 셔츠",
      가격: 10000,
    },
    {
      이름: "멋진 신발",
      가격: 30000,
    },
  ]);

  // navigate 사용하기 위해 선언
  const navigate = useNavigate();

  return (
    <>
      {/* main */}
      <main>
        {/* 케러셀 */}
        <section
          style={{
            backgroundColor: "#4E4FEB",
            color: "white",
            height: "300px",
            lineHeight: "300px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          케러셀
        </section>
        {/* 여름 추천템 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2
            onClick={() => {
              //  navigate 사용하면 => 페이지 이동할 때 추가적으로 코드를 작성할 수 있다.
              // ex) 로그인이 필요할 시 if문을 사용해서 로그인 페이지로 이동
              alert("이동?????????");
              navigate("/products");
            }}
          >
            🔥 여름 추천템 🔥
          </h2>
          {/* 더보기 누르면 products 페이지로 이동 */}
          <Link to={"/products"}>더보기</Link>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {products.map((item) => {
              return (
                <div
                  style={{
                    width: "200px",
                    height: "240px",
                    backgroundColor: "#068FFF",
                  }}
                >
                  <p>{item.이름}</p>
                  <p>{item.가격}</p>
                </div>
              );
            })}

            {/* <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#068FFF",
              }}
            >
              상품1
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#068FFF",
              }}
            >
              상품2
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#068FFF",
              }}
            >
              상품3
            </div> */}
          </div>
        </section>
        {/* 추가적인 데이터 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 세일 상품 🔥</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품1
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품2
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품3
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
