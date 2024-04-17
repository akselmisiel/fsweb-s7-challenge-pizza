import React, { useEffect, useState } from "react";
import {
  FormContainer,
  FormTitle,
  FormSection,
  Label,
  Input,
  Select,
  CheckBoxContainer,
  SubmitButton,
  OrderSummary,
  Price,
  FormDescription,
  FormRadio,
  SelectionTitle,
  OrderNote,
  FormSection2,
  SizeSection,
  SummarySection,
  NameArea,
} from "./OrderForm.styles.jsx";
import { Header } from "../components/Header.jsx";
import Checkbox from "../components/Checkbox.jsx";
import OrderSummaryCard from "../components/OrderSummaryCard.jsx";
import OrderAmountAdjuster from "../components/OrderAmount.jsx";
import { useHistory } from "react-router-dom";
import axios from "axios";

const PizzaOrderForm = () => {
  const history = useHistory();

  const toppingsOptions = [
    { value: "pepperoni", label: "Pepperoni" },
    { value: "tomatoes", label: "Domates" },
    { value: "onions", label: "Soğan" },
    { value: "sausage", label: "Sosis" },
    { value: "canadianBacon", label: "Kanada Jambonu" },
    { value: "grilledChicken", label: "Tavuk Izgara" },
    { value: "corn", label: "Mısır" },
    { value: "sucuk", label: "Sucuk" },
    { value: "jalapeno", label: "Jalapeno" },
    { value: "garlic", label: "Sarımsak" },
    { value: "pepper", label: "Biber" },
    { value: "pineapple", label: "Ananas" },
  ];
  const [formData, setFormData] = useState({
    size: "",
    crust: "",
    toppings: [],
    specialInstructions: "",
    totalPrice: 85,
    amount: 1,
    name: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormData((prevFormData) => {
        const currentToppings = prevFormData.toppings;
        const isAlreadySelected = currentToppings.includes(value);

        if (checked && !isAlreadySelected) {
          if (currentToppings.length < 10) {
            return {
              ...prevFormData,
              toppings: [...currentToppings, value],
            };
          }

          return prevFormData;
        } else if (!checked && isAlreadySelected) {
          return {
            ...prevFormData,
            toppings: currentToppings.filter((topping) => topping !== value),
          };
        }
        return prevFormData;
      });
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValid) {
      alert(Object.values(errors).join("\n"));
      return;
    }

    history.push("/confirm");
    console.log(formData);
    axios
      .post("https://reqres.in/api/users", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });

    setFormData({
      size: "",
      crust: "",
      toppings: [],
      specialInstructions: "",
      totalPrice: 85,
      amount: 1,
      name: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.size) {
      newErrors.size = "Boyut seçimi zorunludur";
    }

    if (!formData.crust) {
      newErrors.crust = "Hamur seçimi zorunludur";
    }

    if (formData.toppings.length < 4) {
      newErrors.toppings = "En az 4 malzeme seçmelisiniz";
    }

    if (formData.name.trim().length < 3) {
      newErrors.name = "İsminiz en az 3 karakter olmalıdır";
    }

    return newErrors;
  };

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const newErrors = validateForm();
    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  }, [formData.size, formData.crust, formData.toppings, formData.name]);

  useEffect(() => {
    let price = formData.price;
    switch (formData.size) {
      case "Küçük":
        price = 85;
        break;
      case "Orta":
        price = 95;
        break;
      case "Büyük":
        price = 110;
        break;
      default:
        price = 85;
    }

    formData.crust === "ince" && (price += 0);
    formData.crust === "normal" && (price += 5);
    formData.crust === "kalın" && (price += 10);

    formData.toppings.forEach(() => {
      price += 8;
    });

    price = price * formData.amount;
    setFormData((prevFormData) => ({
      ...prevFormData,
      totalPrice: price,
    }));
  }, [formData.size, formData.crust, formData.toppings, formData.amount]);

  return (
    <FormContainer>
      <FormTitle>Position Absolute Acı Pizza</FormTitle>
      <Price>₺ {formData.totalPrice.toFixed(2)}</Price>
      <FormDescription>
        Frontent Dev olarak hala position:absolute kullamyorsan bu cok acı pizza
        tam sana göre. Pizza, domates, peynir ve genellikle çesitli diger
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun atesinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzlestirilmis
        mayall buğday bazlı hamurdan olusan italyan kökenli lezzetli bir
        yemektir.. Küçük bir pizzaya bazen pizzetta denir.
      </FormDescription>
      <form onSubmit={handleSubmit}>
        <FormSection2>
          <SizeSection>
            <SelectionTitle>Boyut Seç *</SelectionTitle>

            <FormRadio
              type="radio"
              id="small"
              name="size"
              value="Küçük"
              checked={formData.size === "Küçük"}
              onChange={handleChange}
            />
            <Label htmlFor="small">Küçük</Label>
            <br></br>
            <FormRadio
              type="radio"
              id="medium"
              name="size"
              value="Orta"
              checked={formData.size === "Orta"}
              onChange={handleChange}
            />
            <Label htmlFor="medium">Orta</Label>
            <br></br>
            <FormRadio
              type="radio"
              id="big"
              name="size"
              value="Büyük"
              checked={formData.size === "Büyük"}
              onChange={handleChange}
            />
            <Label htmlFor="big">Büyük</Label>
            <br></br>
            {errors.size && <div style={{ color: "red" }}>{errors.size}</div>}
          </SizeSection>

          <FormSection>
            <SelectionTitle>Hamur Seç *</SelectionTitle>
            <Select name="crust" value={formData.crust} onChange={handleChange}>
              <option value="" disabled={true}>
                Hamur Seç
              </option>{" "}
              <option value="ince">İnce</option>
              <option value="normal">Normal</option>
              <option value="kalın">Kalın</option>
            </Select>
            {errors.crust && <div style={{ color: "red" }}>{errors.crust}</div>}
          </FormSection>
        </FormSection2>
        <FormSection>
          <SelectionTitle>Ek Malzemeler</SelectionTitle>
          <FormDescription>
            En fazla 10 malzeme seçebilirsiniz. 5TL
          </FormDescription>
          <CheckBoxContainer>
            {toppingsOptions.map((topping) => (
              <Checkbox
                key={topping.value}
                value={topping.value}
                checked={formData.toppings.includes(topping.value)}
                onChange={handleChange}
                label={topping.label}
                disabled={
                  formData.toppings.length >= 10 &&
                  !formData.toppings.includes(topping.value)
                }
              />
            ))}
          </CheckBoxContainer>
          {errors.toppings && <p style={{ color: "red" }}>{errors.toppings}</p>}
        </FormSection>

        <FormSection>
          <Label htmlFor="name">İsminiz:</Label>
          <NameArea
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </FormSection>

        <FormSection>
          <Label htmlFor="specialInstructions">Ekstra Notlar</Label>
          <OrderNote
            id="specialInstructions"
            name="specialInstructions"
            value={formData.specialInstructions}
            onChange={handleChange}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />
        </FormSection>
        <SummarySection>
          <OrderSummary>
            <OrderSummaryCard
              size={formData.size}
              toppings={formData.toppings}
              totalPrice={formData.totalPrice}
              submitButton={
                <SubmitButton type="submit">SİPARİŞ VER</SubmitButton>
              }
            />
          </OrderSummary>

          <OrderAmountAdjuster
            orderAmount={formData.amount}
            setForm={setFormData}
          />
        </SummarySection>
      </form>
    </FormContainer>
  );
};

export default PizzaOrderForm;
