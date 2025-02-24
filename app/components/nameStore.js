import { create } from 'zustand';

const useNameStore = create((set) => ({
  name: "",
  setName: (value) => set({ name: value }),
}));

export default useNameStore;
