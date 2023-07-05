import { memo, useCallback, useContext } from "react";
import "./styles.scss";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationScheme } from "src/validationScheme";
import { LoginFormType } from "./type";
import CustomInput from "src/components/CustomInput";
import CustomButton from "src/components/CustomButton";
import { useAppContext } from "src/context/reducer";
import { ModalContextType } from "src/Modals/type";
import { ModalContext } from "src/Modals/Modal";

interface Props {}
const LoginForm = memo(({}: Props) => {
  const { handleLogin } = useAppContext();
  const { setToggleShowModal } = useContext<ModalContextType>(ModalContext);

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    watch,
    reset,
  } = useForm<LoginFormType>({
    defaultValues: {},
    resolver: yupResolver(validationScheme()),
    mode: "all",
  });
  const username = watch("username");

  const onSubmit = useCallback(
    (data: LoginFormType) => {
      handleLogin(data.username?.trim());
      reset();
      setToggleShowModal("isShowAuthModal", false);
    },
    [reset, handleLogin]
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
                type="password"
                required
                errors={errors}
              />
            );
          }}
        />

        <CustomButton
          size="sm"
          type="submit"
          disabled={!isValid || !username?.trim()}
          fullWidth
        >
          Login
        </CustomButton>
      </div>
    </form>
  );
});

export default LoginForm;
