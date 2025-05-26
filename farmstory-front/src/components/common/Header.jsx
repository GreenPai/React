import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="로고" />
        </Link>
        <p>
          <Link to="/">HOME |</Link>
          <a href="./user/login.html">로그인 |</a>
          <a href="./user/terms.html">회원가입 |</a>
          <a href="./myinfo/cart.html">나의정보 |</a>
          <a href="#">로그아웃 |</a>
          <a href="./admin/">관리자 |</a>
          <a href="./community/qna.html">고객센터</a>
        </p>
        <img src="/images/head_txt_img.png" alt="3만원 이상 무료배송" />

        <ul className="gnb">
          <li>
            <Link to="/introduction/hello">팜스토리소개</Link>
          </li>
          <li>
            <Link to="/market/list">
              <img src="/images/head_menu_badge.png" alt="30%" />
              장보기
            </Link>
          </li>
          <li>
            <Link to="/croptalk/story">농작물이야기</Link>
          </li>
          <li>
            <a href="/event/info">이벤트</a>
          </li>
          <li>
            <a href="/community/notice">커뮤니티</a>
          </li>
        </ul>
      </header>
    </>
  );
};
