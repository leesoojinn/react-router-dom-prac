import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Products() {
  // URL에 따라 정렬, 필터링 (ex. 개봉순, 별점순 ...)
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <Link to={"/"}>뒤로가기</Link> <br />
        {/* 버튼 누르면  =>  http://localhost:3001/products?sort=price */}
        <button
          onClick={() =>
            setSearchParams({
              sort: "price",
            })
          }
        >
          가격 정렬순
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {/* Link로 감싸서 상품을 누르면 products/1로 페이지 이동 */}
          <Link to={"/products/1"}>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#068FFF",
              }}
            >
              멋진 바지 <br />
              20000원
            </div>
          </Link>
          <Link to={"/products/2"}>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#068FFF",
              }}
            >
              멋진 셔츠 <br />
              10000원
            </div>
          </Link>
          <Link to={"/products/3"}>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#068FFF",
              }}
            >
              멋진 신발 <br />
              30000원
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
