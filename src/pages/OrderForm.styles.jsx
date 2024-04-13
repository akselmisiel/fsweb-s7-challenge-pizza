import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #fff; // Adjust according to your color scheme
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: -100px; // This will help overlap over the header if that's the design you want
  width: 80%;
  max-width: 800px;
`;

export const FormTitle = styled.h2`
  color: #333; // Replace with the color of your choice
  font-family: 'Roboto Condensed', sans-serif;
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
  text-align: right;
  margin-top: 1rem;
`;
