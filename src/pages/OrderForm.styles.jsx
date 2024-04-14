import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left; // Align items in the center horizontally
  justify-content: center; // Center content vertically
  background-color: #fff;
  height: 80vh; // Full viewport height
  margin: 0 auto; // Remove top margin and center horizontally
  padding: 20px; // Add padding for small screens
  box-sizing: border-box; // Include padding and border in the width and height
  width: 100%; // Full width
  max-width: 500px; // Max width for larger screens
`;
/* margin düzelt */

export const FormTitle = styled.h2`
  color: #333; // Replace with the color of your choice
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1rem;
`;

export const FormSection = styled.section`
  width: 100%;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333; // Replace with the color of your choice
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-right: 0.5rem;
`;

export const Select = styled.select`
  padding: 0.5rem;
  margin-right: 0.5rem;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SubmitButton = styled.button`
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

export const OrderSummary = styled.div`
  margin-top: 1rem;
`;
