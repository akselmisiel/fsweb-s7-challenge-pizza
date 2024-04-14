import React from "react";
import { HeaderContainer, HeaderText, HeaderNav } from "./Header.styles.jsx";
import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>Teknolojik Yemekler</HeaderText>
      <HeaderNav>
        <NavLink exact to="/" activeClassName="activeNav">
          Anasayfa -
        </NavLink>
        <NavLink to="/options" activeClassName="activeNav">
          Seçenekler -
        </NavLink>
        <NavLink to="/order" activeClassName="activeNav">
          Sipariş Oluştur
        </NavLink>
      </HeaderNav>
    </HeaderContainer>
  );
};
