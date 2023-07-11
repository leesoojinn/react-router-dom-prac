// 목표 : react-router-dom으로 페이지 이동 편하게 하기

import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./common/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      {/* layout으로 감싸야 전체 페이지에 header, footer가 붙는다 */}
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        {/* 페이지 하나하나를 다 만들 수 없기 때문에 =>  /:id (: + 아무 이름)  ,   URL Parameter*/}
        <Route path="/products/:id" element={<Product />} />
        {/* 로그인 페이지 */}
        <Route path="/login" element={<Login />} />
        {/* 회원가입 페이지 */}
        <Route path="/signup" element={<Signup />} />
      </Route>
      {/* 없는 페이지로 이동하면 404 문구와 홈으로 이동할 수 있는 link 추가 */}
      <Route
        path="*"
        element={
          <>
            <div>404 없는 페이지입니다.</div>
            <Link to={"/"}>홈으로 이동</Link>
          </>
        }
      />
    </Routes>
  );
}

export default App;
