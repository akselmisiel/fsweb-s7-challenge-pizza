import React from 'react';
import { Input, Label } from '../pages/OrderForm.styles';

const Checkbox = ({value, checked, onChange, label }) => {
    return (
        <Label>
            <Input
                type="checkbox"
                name="toppings"
                value={value}
                checked={checked}
                onChange={onChange}
            /> {label}
        </Label>
    );
};

export default Checkbox;