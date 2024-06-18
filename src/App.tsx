/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  // const count = useSelector((state: RootState) => state.counter.count);
  // const dispatch = useDispatch();
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <div className=" p-10 flex border border-violet-400 rounded-md bg-purple-100">
        <div className="flex">
          <button
            onClick={() => dispatch(increment())}
            className="px-3 py-2 rounded-md bg-green-600 text-white text-xl font-semibold">
            Increment
          </button>
          <button
            onClick={() => dispatch(incrementByValue(5))}
            className="px-3 py-2 rounded-md bg-green-600 text-white text-xl font-semibold mx-3">
            Increment By Value
          </button>
          <h1 className="text-3xl mx-8">{count}</h1>
          <button
            onClick={() => dispatch(decrement())}
            className="px-3 py-2 rounded-md bg-red-600 text-white text-xl font-semibold">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
