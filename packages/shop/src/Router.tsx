import React, { useCallback, useEffect, useRef, useState } from "react";
import CounterAppOne from "./components/CounterAppOne";
import { Route, Routes, Link, useNavigate, Navigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationScheme } from "./validationScheme";
import { CustomButton, CustomInput } from "./components";
import { URI } from "./constant";
import { ShopPage } from "./pages/ShopPage";
import { Layout } from "./components/layout/Layout";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

const Router = () => {
  const navigate = useNavigate();

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
            <Route index element={<ShopPage />} />
            {/* <Route path={URI.product} element={<CounterAppOne />} /> */}
          </Routes>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default Router;
