import React from "react";
import "../../ui-libs/pr1-input";
import "./App.scss";
import "./styles/global.scss";
import { LandingPage } from "./pages/LandingPage";

// const CounterAppOne = React.lazy(() => import("shop/CounterAppOne"));
// const Shop = React.lazy(() => import("shop/Shop"));

const App = () => {
  console.log("@@init App");
  return (
    <div>
      <LandingPage />
    </div>
    //   <button onClick={() => setShow(!show)}>click show/hide</button>
    //   {show && (
    //     <>
    //       <CustomInput
    //         ref={ref}
    //         type="text"
    //         value={val}
    //         placeholder={`placeholder ${count}`}
    //         size="sm"
    //       ></CustomInput>
    //     </>
    //   )}
    //   <Link to="containerPage1">Go to container page 1</Link>
    //   <h5>
    //     Val:
    //     {val}
    //   </h5>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={<ContainerApp CounterAppOne={CounterAppOne} />}
    //     />
    //     <Route path="/containerPage1" element={<h1>Container Page 1</h1>} />
    //     <Route path="/shop/*" element={<Shop />} />
    //     {/* <Route path="shop/*" element={<CounterAppOne />} /> */}
    //   </Routes>
    // </LandingPage>
  );
};

export default App;
