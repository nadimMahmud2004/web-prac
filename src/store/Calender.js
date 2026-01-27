import { create } from "zustand";

import { INITIAL_EVENTS } from "../data";

const useCalender = create((set) => ({
  currentEvents: INITIAL_EVENTS,
  setCurrentEvents: (events) =>
    set({
      customElements: events,
    }),
}));

export default useCalender;
