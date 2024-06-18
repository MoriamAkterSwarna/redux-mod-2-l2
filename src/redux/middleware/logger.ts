/* eslint-disable @typescript-eslint/no-explicit-any */
const Logger = (state: any) => (next: any) => (action: any) => {
  //   console.log(state);
  //   console.log(next);
  //   console.log(action);

  console.log("Current State => ", state.getState());
  console.log("Action => ", action);
  next(action);
  console.log("Current State => ", state.getState());
};
export default Logger;
