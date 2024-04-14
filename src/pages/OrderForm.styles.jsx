import styled from 'styled-components';

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
`

export const FormTitle = styled.h2`
  color: #333; // Replace with the color of your choice
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.5rem;
  margin-top: 5rem;
`;

export const FormRadio = styled.input`
  margin-right: 20rem; // Add space between radio buttons
  margin-bottom: -15px;
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;

export const SelectionTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  `

export const FormDescription = styled.p`
  color: #333;
  font-size: 1rem;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 1rem; // You can adjust this to increase the font size if needed
`;

export const Input = styled.input`
  width: 100%; // Make inputs fill their container
  padding: 0; // Increase padding for bigger appearance
  margin-bottom: -36px; // Add space between checkboxes
  border: 1px solid #ccc; // Add border for definition
  border-radius: 4px; // Slight rounding of corners
  vertical-align: middle; // Align checkboxes with their labels
`;

export const Select = styled.select`
  width: 100%; 
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1); // Optional: add a subtle shadow
`;
export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-height: 200px; // Limit height to prevent overflow
`;

export const OrderNote = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none; // Prevent resizing of the textarea
`;

export const SubmitButton = styled.button`
  background-color: #FDC913; // Adjust to match the color in the image
  color: #000; // Text color
  border: none;
  font-size: 1em;
  cursor: pointer;
  margin-top: 20px; // Adjust spacing as needed
  text-transform: uppercase;
  width: 100%; // Make button fill its container
  padding: 1rem; // Increase padding for bigger appearance
  border-radius: 4px;// Make button full width
  &:hover {
    background-color: #e0a800; // Darker shade for hover state
  }
`;
export const OrderSummary = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between; // Adjust to layout the summary like in the image
  align-items: center;
  font-weight: bold; // If summary text is bold
  width: 100%;
  padding: 0.75rem 0; // Adjust padding as needed
`;
