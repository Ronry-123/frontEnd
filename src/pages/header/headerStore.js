import create from 'zustand';

export const useBearStore = create((set) => ({
  data: [],
  setData: (val) => {
    set({ data: val });
  },
}));
