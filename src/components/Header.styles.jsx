import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #ce2829;
  width: 100%;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  top: 0;
  position: absolute;
`;

export const HeaderText = styled.h1`
  color: white;
  font-weight: 450;
  align-items: center;
  text-align: center;
  font-family: "Londrina Solid", sans-serif;
  padding-bottom: 30px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: bottom;
  a {
    text-decoration: none;
    font-weight: bold;
    padding: 0px 3px;
  }
`;
