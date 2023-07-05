import { CustomInput } from "src/components";
import "./style.scss";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { CartForm } from "src/interface/cart";

const CartInfo = memo(() => {
  const {
    formState: { errors },
    control,
  } = useFormContext<CartForm>();

  return (
    <div className="cart-info">
      <div className="cart-info__user">
        <h5 className="text-secondary">Your information</h5>
        <div className="cart-info__user-form">
          <div className="cart-info__form-row gap-xl">
            <Controller
              name="fullname"
              control={control}
              render={({ field }) => {
                return (
                  <CustomInput
                    {...field}
                    className="cart-info__form-name"
                    width="100%"
                    label="Fullname"
                    required
                    errors={errors}
                  />
                );
              }}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field }) => {
                return (
                  <CustomInput
                    {...field}
                    className="cart-info__form-phone"
                    width="100%"
                    label="Phone number"
                    required
                    errors={errors}
                  />
                );
              }}
            />
          </div>
        </div>
      </div>

      <div className="cart-info__delivery">
        <h5 className="text-secondary">Delivery address</h5>
        <div className="cart-info__delivery-form">
          <div className="cart-info__form-row">
            <Controller
              name="city"
              control={control}
              render={({ field }) => {
                return (
                  <CustomInput
                    {...field}
                    className="cart-info__form-city"
                    width="100%"
                    label="City"
                    required
                    errors={errors}
                  />
                );
              }}
            />
            <Controller
              name="district"
              control={control}
              render={({ field }) => {
                return (
                  <CustomInput
                    {...field}
                    className="cart-info__form-district"
                    width="100%"
                    label="District"
                    required
                    errors={errors}
                  />
                );
              }}
            />
          </div>

          <div className="cart-info__form-row">
            <Controller
              name="ward"
              control={control}
              render={({ field }) => {
                return (
                  <CustomInput
                    {...field}
                    className="cart-info__form-ward"
                    width="100%"
                    label="Ward"
                    required
                    errors={errors}
                  />
                );
              }}
            />
            <Controller
              name="houseNumber"
              control={control}
              render={({ field }) => {
                return (
                  <CustomInput
                    {...field}
                    className="cart-info__form-house-number"
                    width="100%"
                    label="House number"
                    required
                    errors={errors}
                  />
                );
              }}
            />
          </div>

          <div className="cart-info__form-row">
            <Controller
              name="note"
              control={control}
              render={({ field }) => {
                return (
                  <CustomInput
                    {...field}
                    className="cart-info__form-note"
                    width="100%"
                    label="Note"
                    errors={errors}
                  />
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default CartInfo;
