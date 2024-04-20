/* app imports */
import { CounterState } from "./counter";
import { SoundState } from "./sound";

/* interface */
export interface AppReduxState
  extends CounterState, SoundState {}
