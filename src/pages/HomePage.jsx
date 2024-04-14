import React from "react";
import {
  HomeContainer,
  Title,
  Subtitle,
  ActionButton,
} from "./HomePage.styles";
import { useHistory } from "react-router-dom";
const HomePage = () => {
  const history = useHistory();
  const handleOrderClick = () => {
    history.push("/order");
  };
  return (
    <HomeContainer>
      <Title>Teknolojik Yemekler</Title>
      <Subtitle>KOD ACIKTIRIR</Subtitle>
      <Subtitle>PİZZA, DOYURUR</Subtitle>
      <ActionButton onClick={handleOrderClick}>ACIKTIM</ActionButton>
    </HomeContainer>
  );
};

export default HomePage;
