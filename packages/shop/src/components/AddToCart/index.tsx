import { ChangeEvent, memo, useCallback, useMemo, useState } from "react";
import "./styles.scss";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";

interface Props {
  onChangeQuantity?: (number: number) => void;
  onPlus?: (number: number) => void;
  onMinus?: (number: number) => void;
  onAddToCart?: (number: number) => void;
  defaultQty?: number;
  inputOnly?: boolean;
}

const AddToCart = ({
  onChangeQuantity,
  onPlus,
  onMinus,
  onAddToCart,
  defaultQty = 1,
  inputOnly,
}: Props) => {
  const [value, setValue] = useState(defaultQty?.toString());

  const isValid = useMemo(() => value && Number(value) > 0, [value]);

  const handleBlurInput = useCallback(() => {
    if (!isValid) {
      setValue(defaultQty?.toString());
    }
  }, [isValid, defaultQty]);

  const handleChangeInput = useCallback(
    (value: string, e?: ChangeEvent<Element>) => {
      const newVal = value === "" ? "" : Math.abs(parseInt(value));
      setValue(newVal.toString());
      !!onChangeQuantity && newVal !== "" && onChangeQuantity(newVal);
    },
    []
  );

  const handleMinus = useCallback(() => {
    setValue((prev: string) => {
      const next = Number(prev || 0) - 1;
      if (next < 1) {
        return "1";
      } else {
        setTimeout(() => {
          !!onMinus && onMinus(-1);
        });
        return next?.toString();
      }
    });
  }, []);

  const handlePlus = useCallback(() => {
    setValue((prev: string) => {
      return (Number(prev || 0) + 1)?.toString();
    });
    !!onPlus && onPlus(1);
  }, []);

  const handleAddToCart = useCallback(() => {
    !!onAddToCart && onAddToCart(Number(value));
  }, [value]);

  return (
    <div className="add-to-cart">
      <div className="add-to-cart__quantity">
        <span
          className="text-xs add-to-cart__quantity-minus"
          onClick={handleMinus}
        >
          -
        </span>
        <div className="add-to-cart__quantity-input">
          <CustomInput
            value={value}
            width="60px"
            size="xs"
            align="center"
            type="number"
            onChange={handleChangeInput}
            onBlur={handleBlurInput}
            integer
            error={!isValid ? "Invalid value" : undefined}
          />
        </div>
        <span
          className="text-xs add-to-cart__quantity-plus"
          onClick={handlePlus}
        >
          +
        </span>
      </div>
      {!inputOnly && (
        <div className="add-to-cart__button">
          <CustomButton size="xs" onClick={handleAddToCart} disabled={!isValid}>
            Add to cart
          </CustomButton>
        </div>
      )}
    </div>
  );
};

export default memo(AddToCart);
