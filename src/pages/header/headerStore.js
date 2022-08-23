import create from 'zustand';

export const useHeaderStore = create((set) => ({
  data: [],
  setData: (val) => {
    set({ data: val });
  },
}));
