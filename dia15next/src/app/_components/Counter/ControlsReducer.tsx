import {
  DECREMENT,
  INCREMENT,
  RESET,
  useCounterReducer,
} from "./CounterProviderReducer";

export const ControlsReducer = () => {
  const { dispatch } = useCounterReducer();
  return (
    <div className="flex">
      <button
        onClick={() => dispatch(INCREMENT)}
        className="p-3 bg-blue-300 rounded-sm m-4"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(DECREMENT)}
        className="p-3 bg-green-300 rounded-sm m-4"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(RESET)}
        className="p-3 bg-red-300 rounded-sm m-4"
      >
        Reset
      </button>
    </div>
  );
};
