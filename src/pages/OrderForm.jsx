import React from 'react';
import { FormContainer, FormTitle, FormSection, Label, Input, Select, CheckBoxContainer, SubmitButton, OrderSummary, Price, FormDescription, FormRadio, SelectionTitle } from './OrderForm.styles.jsx';
import { Header } from '../components/Header.jsx';

const PizzaOrderForm = () => {
    // Form state and handlers would go here

    return (
        <FormContainer>
            <FormTitle>Position Absolute Acı Pizza</FormTitle>
            <Price>₺ 25.00</Price>
            <FormDescription>Frontent Dev olarak hala position:absolute kullamyorsan bu cok acı pizza tam sana
göre. Pizza, domates, peynir ve genellikle çesitli diger malzemelerle kaplanmış, daha
sonra geleneksel olarak odun atesinde bir fırında yüksek sıcaklıkta pişirilen,
genellikle yuvarlak, düzlestirilmis mayall buğday bazlı hamurdan olusan italyan
kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.</FormDescription>
            <form>
                <FormSection>
                    <SelectionTitle>Boyut Seç *</SelectionTitle>
                    <FormRadio type="radio" id="small" name="boyut" value="Küçük" />
                    <Label htmlFor="small">Küçük</Label><br></br>
                    <FormRadio type="radio" id="medium" name="boyut" value="Orta" />
                    <Label htmlFor="medium">Orta</Label><br></br>
                    <FormRadio type="radio" id="big" name="boyut" value="Büyük" />
                    <Label htmlFor="big">Büyük</Label><br></br>
                </FormSection>
                
                <FormSection>
                    <Label>Hamur Seç *</Label>
                    <Select name="crust">
                        {/* Options for crust types */}
                    </Select>
                </FormSection>

                <FormSection>
                    <Label>Ek Malzemeler</Label>
                    <CheckBoxContainer>
                        <Label><Input type="checkbox" name="toppings" value="pepperoni" /> Pepperoni</Label>
                        <Label><Input type="checkbox" name="toppings" value="tomatoes" /> Domates</Label>
                        <Label><Input type="checkbox" name="toppings" value="onions" /> Soğan</Label>
                        {/* Repeat for other toppings */}
                    </CheckBoxContainer>
                </FormSection>

                {/* Special Instructions and Order Summary can be added here */}
                
                <SubmitButton type="submit">SİPARİŞ VER</SubmitButton>
            </form>
        </FormContainer>
    );
};

export default PizzaOrderForm;