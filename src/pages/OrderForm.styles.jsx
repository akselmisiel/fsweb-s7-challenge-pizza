import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left; 
  height: 80vh; 
  margin: auto;
  width: 100%; 
  padding-top: 2rem;
  max-width: 650px;
  max height: 800px;
`;

export const Price = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
`;

export const FormTitle = styled.h2`
  color: #333;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.5rem;
  margin-top: 5rem;
`;

export const FormRadio = styled.input`
  margin-right: 10rem;
  margin-bottom: -15px;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;

export const FormSection2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 1rem;
`;

export const SizeSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;

export const SelectionTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
`;

export const FormDescription = styled.p`
  color: #5f5f5f;
  font-size: 1rem;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0;
  margin-bottom: -36px;
  border: 1px solid #ccc;
  border-radius: 4px;
  vertical-align: middle;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;
export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-height: 215px;
`;

export const OrderNote = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

export const SubmitButton = styled.button`
  background-color: #fdc913;
  color: #000;
  border: none;
  font-size: 1em;
  cursor: pointer;
  margin-top: 20px;
  text-transform: uppercase;
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  &:hover {
    background-color: #e0a800;
  }
`;
export const OrderSummary = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  width: 200px;
  padding: 0.75rem 0;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin-left: auto;
`;
