import React from 'react';
import { FormContainer, FormTitle, FormSection, Label, Input, Select, CheckBoxContainer, SubmitButton, OrderSummary } from './OrderForm.styles.jsx';
import { Header } from '../components/Header.jsx';
const PizzaOrderForm = () => {
    // Form state and handlers would go here
    return (
        <FormContainer>
            <FormTitle>Position Absolute Acı Pizza</FormTitle>
            <form>
                {/* Pizza Size Selection */}
                <FormSection>
                    <Label>Boyut Seç *</Label>
                    <Select name="size">
                        <option value="small">Küçük</option>
                        <option value="medium">Orta</option>
                        <option value="large">Büyük</option>
                    </Select>
                </FormSection>
                
                {/* More form sections for crust type, toppings, etc. */}

                {/* Toppings Selection */}
                <FormSection>
                    <Label>Ek Malzemeler</Label>
                    <CheckBoxContainer>
                        {/* Map over toppings and create checkboxes */}
                        <Label>
                            <Input type="checkbox" name="toppings" value="pepperoni" /> Pepperoni
                        </Label>
                        {/* Repeat for other toppings */}
                    </CheckBoxContainer>
                </FormSection>

                {/* Special Instructions */}
                <FormSection>
                    <Label>Sipariş Notu</Label>
                    <textarea placeholder="Siparişinize eklemek istediğiniz bir not var mı?" />
                </FormSection>

                {/* Order Summary */}
                <OrderSummary>
                    {/* Calculate and display order total */}
                    <p>Sipariş Toplamı: 25.00₺</p>
                </OrderSummary>

                {/* Submit Button */}
                <SubmitButton type="submit">SİPARİŞ VER</SubmitButton>
            </form>
        </FormContainer>
    );
};

export default PizzaOrderForm;
