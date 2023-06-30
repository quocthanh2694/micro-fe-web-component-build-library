import { ChangeEvent, memo, useCallback, useState } from "react";
import "./styles.scss";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";

interface Props {}
const AddToCart = memo(({}: Props) => {
  const [value, setValue] = useState("1");

  const handleChangeInput = useCallback(
    (value: string | ChangeEvent<Element>) => {
      setValue(value as string);
    },
    []
  );

  return (
    <div className="add-to-cart">
      <div className="add-to-cart__quantity">
        <span className="text-xs add-to-cart__quantity-minus">-</span>
        <div className="add-to-cart__quantity-input">
          <CustomInput
            value={value}
            width="60px"
            size="xs"
            align="center"
            onChange={handleChangeInput}
          />
        </div>
        <span className="text-xs add-to-cart__quantity-plus">+</span>
      </div>
      <div className="add-to-cart__button">
        <CustomButton size="xs">Add to cart</CustomButton>
      </div>
    </div>
  );
});

export default AddToCart;
