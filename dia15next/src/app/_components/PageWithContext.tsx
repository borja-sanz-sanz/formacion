"use client";

import { Controls } from "./Counter/Controls";
import { CounterProvider } from "./Counter/CounterProvider";
import { Increment } from "./Counter/Increment";
import { ShowCounter } from "./Counter/ShowCounter";
import { CounterProviderReducer } from "./Counter/CounterProviderReducer";
import { ControlsReducer } from "./Counter/ControlsReducer";
import { ShowCounterReducer } from "./Counter/ShowCounterReducer";

export const PageWithContext = () => {
  return (
    <>
      <CounterProvider>
        <Controls />
        <ShowCounter />
        <Increment />
      </CounterProvider>
      <div> **************</div>
      <CounterProviderReducer>
        <ControlsReducer />
        <ShowCounterReducer />
      </CounterProviderReducer>
      <div> **************</div>
      <CounterProviderReducer>
        <ControlsReducer />
        <ShowCounterReducer />
        <ControlsReducer />
        <ControlsReducer />
        <ControlsReducer />
        <ControlsReducer />
        <ControlsReducer />
        <ControlsReducer />
      </CounterProviderReducer>
    </>
  );
};
