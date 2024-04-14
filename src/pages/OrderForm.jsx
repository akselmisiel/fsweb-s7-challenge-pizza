import React, { useState } from 'react';
import { FormContainer, FormTitle, FormSection, Label, Input, Select, CheckBoxContainer, SubmitButton, OrderSummary, Price, FormDescription, FormRadio, SelectionTitle, OrderNote } from './OrderForm.styles.jsx';
import { Header } from '../components/Header.jsx';
import Checkbox from '../components/Checkbox.jsx';
import OrderSummaryCard from '../components/OrderSummaryCard.jsx';

const PizzaOrderForm = () => {
    // Form state and handlers would go here

    const [formData, setFormData] = useState({
        size: '',
        crust: '',
        toppings: [],
        specialInstructions: ''
    });

    // Handle changes in form inputs
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            setFormData(prevFormData => ({
                ...prevFormData,
                toppings: checked 
                    ? [...prevFormData.toppings, value]
                    : prevFormData.toppings.filter(topping => topping !== value)
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit logic or validation here
        console.log(formData); 
        setFormData({
            size: '',
            crust: '',
            toppings: [],
            specialInstructions: ''
        });
    };

    return (
        <FormContainer>
            <FormTitle>Position Absolute Acı Pizza</FormTitle>
            <Price>₺ 25.00</Price>
            <FormDescription>Frontent Dev olarak hala position:absolute kullamyorsan bu cok acı pizza tam sana
göre. Pizza, domates, peynir ve genellikle çesitli diger malzemelerle kaplanmış, daha
sonra geleneksel olarak odun atesinde bir fırında yüksek sıcaklıkta pişirilen,
genellikle yuvarlak, düzlestirilmis mayall buğday bazlı hamurdan olusan italyan
kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.</FormDescription>
            <form onSubmit={handleSubmit}>
                <FormSection>
                    <SelectionTitle>Boyut Seç *</SelectionTitle>
                    <FormRadio type="radio" id="small" name="size" value="Küçük" checked={formData.size === 'Küçük'} onChange={handleChange}/>
                    <Label htmlFor="small">Küçük</Label><br></br>
                    <FormRadio type="radio" id="medium" name="size" value="Orta" checked={formData.size === 'Orta'} onChange={handleChange}/>
                    <Label htmlFor="medium" >Orta</Label><br></br>
                    <FormRadio type="radio" id="big" name="size" value="Büyük" checked={formData.size === 'Büyük'} onChange={handleChange} />
                    <Label htmlFor="big">Büyük</Label><br></br>
                </FormSection>
                
                <FormSection>
                    <Label>Hamur Seç *</Label>
                    <Select name="crust"  value={formData.crust} onChange={handleChange}>
                        <option value="">Hamur Seç</option> {/* !!!Tek seferlik seçilebilir hale getir */}
                        <option value="ince">İnce</option>
                        <option value="normal">Normal</option>
                        <option value="kalın">Kalın</option>
                    </Select>
                </FormSection>

                <FormSection>
                    <SelectionTitle>Ek Malzemeler</SelectionTitle>
                    <CheckBoxContainer>
                        <Checkbox value="pepperoni" checked={formData.toppings.includes('pepperoni')} onChange={handleChange} label="Pepperoni" />
                        <Checkbox value="tomatoes" checked={formData.toppings.includes('tomatoes')} onChange={handleChange} label="Domates" />
                        <Checkbox value="onions" checked={formData.toppings.includes('onions')} onChange={handleChange} label="Soğan" />
                        <Checkbox value="sausage" checked={formData.toppings.includes('sausage')} onChange={handleChange} label="Sosis" />
                        <Checkbox value="canadianBacon" checked={formData.toppings.includes('canadianBacon')} onChange={handleChange} label="Kanada Jambonu" />
                        <Checkbox value="grilledChicken" checked={formData.toppings.includes('grilledChicken')} onChange={handleChange} label="Tavuk Izgara" />
                        <Checkbox value="corn" checked={formData.toppings.includes('corn')} onChange={handleChange} label="Mısır" />
                        <Checkbox value="sucuk" checked={formData.toppings.includes('sucuk')} onChange={handleChange} label="Sucuk" />
                        <Checkbox value="jalapeno" checked={formData.toppings.includes('jalapeno')} onChange={handleChange} label="Jalapeno" />
                        <Checkbox value="garlic" checked={formData.toppings.includes('garlic')} onChange={handleChange} label="Sarımsak" />
                        {/*toppings: biber, ananas, kabak*/}
                        <Checkbox value="pepper" checked={formData.toppings.includes('pepper')} onChange={handleChange} label="Biber" />
                        <Checkbox value="pineapple" checked={formData.toppings.includes('pineapple')} onChange={handleChange} label="Ananas" />
                        <Checkbox value="zucchini" checked={formData.toppings.includes('zucchini')} onChange={handleChange} label="Kabak" />
                    </CheckBoxContainer>
                </FormSection>

                <FormSection>
                    <Label htmlFor="specialInstructions">Ekstra Notlar</Label>
                    <OrderNote id="specialInstructions" name="specialInstructions" value={formData.specialInstructions} onChange={handleChange}/>
                </FormSection>

                <OrderSummaryCard size={formData.size} toppings={formData.toppings} />
                

                {/* Special Instructions and Order Summary can be added here */}
                
                <SubmitButton type="submit">SİPARİŞ VER</SubmitButton>
            </form>
        </FormContainer>
    );
};

export default PizzaOrderForm;