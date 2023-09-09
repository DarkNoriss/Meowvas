import { create } from 'zustand';

type User = {
  id: string;
  username: string;
};

type UserStoreType = {
  user: User | null;
  setUser: (user: User) => void;
};

export const userStore = create<UserStoreType>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
