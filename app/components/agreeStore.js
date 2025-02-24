import { create } from 'zustand';

const useAgreeStore = create((set) => ({
  isChecked: false,
  setIsChecked: (value) => set({ isChecked: value }),
}));

export default useAgreeStore;
