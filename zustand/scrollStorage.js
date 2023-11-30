import { create } from 'zustand';

export const scrollStorage = create((set) => ({
  scroll: 0,
  changeScroll: ( input ) => set({ scroll: input })
}))
