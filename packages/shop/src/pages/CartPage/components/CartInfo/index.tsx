import { CustomDropdown, CustomInput } from "src/components";
import "./style.scss";
import { memo, useEffect, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { CartForm } from "src/interface/cart";
import { IUser } from "src/interface/user";
import useAdministrativeDivision from "src/hooks/useAdministrativeDivision";

interface Props {
  userInfo?: IUser;
}

const CartInfo = memo(({ userInfo }: Props) => {
  const { cities, districts, wards } = useAdministrativeDivision();

  const {
    formState: { errors },
    watch,
    setValue,
    control,
  } = useFormContext<CartForm>();
  const cityId = watch("city");
  const districtId = watch("district");

  // reset district/ward after select a city
  useEffect(() => {
    setValue("district", "");
    setValue("ward", "");
  }, [cityId, setValue]);

  // reset ward after select a district
  useEffect(() => {
    setValue("ward", "");
  }, [districtId, setValue]);

  const filteredDistricts = useMemo(() => {
    if (!cityId) return [];

    return districts.filter((x) => x.parentId === cityId);
  }, [cityId, districts]);

  const filteredWards = useMemo(() => {
    if (!districtId) return [];

    return wards.filter((x) => x.parentId === districtId);
  }, [districtId, wards]);

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
                    disabled={!!userInfo?.name}
                    className="cart-info__form-name"
                    width="100%"
                    label="Fullname"
                    required
                    errors={errors}
                    tabIndex={1}
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
                    disabled={!!userInfo?.phone}
                    className="cart-info__form-phone"
                    width="100%"
                    label="Phone number"
                    required
                    errors={errors}
                    tabIndex={2}
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
                  <CustomDropdown
                    {...field}
                    className="cart-info__form-city"
                    label="City"
                    required
                    options={cities}
                    errors={errors}
                    tabIndex={3}
                  />
                );
              }}
            />
            <Controller
              name="district"
              control={control}
              render={({ field }) => {
                return (
                  <CustomDropdown
                    {...field}
                    className="cart-info__form-district"
                    label="District"
                    required
                    options={filteredDistricts}
                    errors={errors}
                    tabIndex={4}
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
                  <CustomDropdown
                    {...field}
                    className="cart-info__form-ward"
                    label="Ward"
                    required
                    options={filteredWards}
                    errors={errors}
                    tabIndex={5}
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
                    tabIndex={6}
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
                    tabIndex={7}
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
