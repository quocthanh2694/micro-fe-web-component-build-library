import { memo, useCallback } from "react";
import "./styles.scss";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationScheme } from "src/validationScheme";
import { LoginFormType } from "./type";
import CustomInput from "src/components/CustomInput";
import CustomButton from "src/components/CustomButton";

interface Props {}
const LoginForm = memo(({}: Props) => {
  const {
    control,
    formState: { errors, isValid, isDirty, isSubmitted },
    handleSubmit,
    reset,
  } = useForm<LoginFormType>({
    defaultValues: {},
    resolver: yupResolver(validationScheme()),
    mode: "all",
  });

  const onSubmit = useCallback(
    (data: LoginFormType) => {
      console.log("@@@submit login", data);
      // reset();
    },
    [reset]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="login-form">
        <h3 className="text-center">Login</h3>

        <Controller
          name="username"
          control={control}
          render={({ field }) => {
            return (
              <CustomInput
                {...field}
                width="100%"
                label="Username"
                required
                errors={errors}
              />
            );
          }}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => {
            return (
              <CustomInput
                {...field}
                width="100%"
                label="Password"
                required
                errors={errors}
              />
            );
          }}
        />

        <CustomButton size="sm" type="submit" disabled={!isValid} fullWidth>
          Login
        </CustomButton>
      </div>
    </form>
  );
});

export default LoginForm;
