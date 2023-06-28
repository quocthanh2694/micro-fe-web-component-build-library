import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log('!!@@@@@@@@@@@@@@@@counter 1 initializeeeeeeeeeeee')

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <span>
        Add by one each click <strong>APP-1</strong>
      </span>
      <span>Your click count : {count} </span>
      <br />
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <br />
      <button onClick={() => navigate(-1)}>history go back</button>
      <br />
      {location.pathname !== "/" && <a href="/">Back to container</a>}
    </div>
  );
};

export default Counter;
