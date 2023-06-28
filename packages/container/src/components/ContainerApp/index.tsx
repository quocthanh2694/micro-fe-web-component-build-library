import React from "react";

var version = process.env.BUILD_DATE;

type ContainerAppProps = {
  CounterAppOne: React.LazyExoticComponent<React.ComponentType<{}>>;
};

export const ContainerApp = ({ CounterAppOne }: ContainerAppProps) => {
  return (
    <div>
      <div>
        Latest Build Date: <div>{version}</div>
      </div>
      <div>
        <h1>CONTAINER</h1>
        <div>
          <React.Suspense fallback={<div />}>
            <div>
              <h2 color="#6F60EA">APP-1</h2>
              <CounterAppOne />
              <a href="/shop">To Shop</a>
            </div>
          </React.Suspense>
        </div>
      </div>
      <a
        href="https://github.com/ogzhanolguncu/react-typescript-module-federation"
        target="_blank"
      >
        <img src="./git.png" height="45px" width="45px" />
      </a>
    </div>
  );
};
