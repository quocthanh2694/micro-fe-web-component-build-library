import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Layout } from "./components/layout/Layout";
import { URI } from "./constants/constant";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { validationScheme } from "./validationScheme";
import CartPage from "./pages/CartPage";

const Router = () => {

  const handleInputChange = (e: CustomEvent<string>) => {
    // console.log("@@eee", e);
  };

  const [val, setVal] = useState("");
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);

  // react hook forms
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { username: "" },
    resolver: yupResolver(validationScheme()),
    mode: "all",
  });

  const onSubmit = useCallback((data: any) => {
    console.log("@@submit", data);
  }, []);

  return (
    <>
      <Layout>
        <Header />
        {/* <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <button onClick={() => setShow(!show)}>click show/hide</button>
          {show && (
            <Controller
              name="username"
              control={control}
              render={({ field }: any) => {
                return (
                  <CustomInput
                    {...field}
                    type="number"
                    placeholder={`placeholder ${count}`}
                    size="xs"
                    label="Username"
                    errors={errors}
                    required
                  ></CustomInput>
                );
              }}
            />
          )}
          <CustomButton size="md" type="submit" disabled={!isValid}>
            submit
          </CustomButton>
        </form>
        <h1>APP-1</h1> */}
        <div className="shop-layout__body">
          {/* <Link to={URI.cart} >to cart</Link> */}
          <Routes>
            {/* <Route
            index
            element={
              <div>
                <h3>Home app 1</h3>
                <br />
                <Link to={URI.product}>go to link 1</Link>

                <br />
                <button onClick={() => navigate(-1)}>history go back</button>
              </div>
            }
          /> */}
            <Route index element={<HomePage />} />
            <Route path={URI.product} element={<ProductPage />} />
            <Route path={URI.cart} element={<CartPage />} />
            {/* <Route path={"/shop"} element={<HomePage />}>
            </Route> */}
            {/* <Route path="*" element={<NoMatch />} /> */}
          </Routes>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default Router;
