// 반복되는 부분 하나로 묶기  => header, footer

import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div
      // header 스타일 추가
      style={{
        minHeight: "100vh",
        position: "relative",
        paddingBottom: "90px",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#000000",
          color: "white",
        }}
      >
        <Link to={"/"}>로고</Link>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <Link to={"/login"}>로그인</Link>
          <Link to={"/signup"}>회원가입</Link>
        </div>
      </header>
      {/* Outlet : nested routes가 어디에 보여질지 정하는 것 */}
      {/* 이걸 넣어야 다른 컴포넌트들이 보인다. */}
      <Outlet />
      {/* footer */}
      <footer
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#EEEEEE",
          color: "black",
          // footer 스타일 추가
          position: "absolute",
          bottom: 0,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div>문의하기</div>
        <div>SNS 채널들</div>
      </footer>
    </div>
  );
}
