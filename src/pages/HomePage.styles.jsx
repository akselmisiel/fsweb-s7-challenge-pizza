import styled from 'styled-components';
import backgroundImage from '/Assets/mile1-assets/home-banner.png'; 

export const HomeContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover; 
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  color: white;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-family: 'Londrina Solid', sans-serif;
  margin: 0;
  padding: 120px 0px 65px 0px;
  letter-spacing: 2px;
`;

export const Subtitle = styled.h2`
  font-size: 3rem;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 100;
  margin: 0;
`;

export const ActionButton = styled.button`
  background-color: yellow;
  border: none;
  padding: 10px 20px;
  border-radius: 15px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 10px;
  text-transform: uppercase;
  &:hover {
    background-color: #f8d22a;
  }
`;
