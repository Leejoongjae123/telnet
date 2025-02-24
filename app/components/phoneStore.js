  import { create } from 'zustand';

  const usePhoneStore = create((set) => ({
    phone: "",
    setPhone: (value) => set({ phone: value }),
  }));

  export default usePhoneStore;
