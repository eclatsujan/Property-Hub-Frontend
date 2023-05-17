import {create} from 'zustand';
import {login} from '../../utils/auth';
export const useAuthStore = create((set) => ({
  isLoggedIn:false,
  login: (email, password) => {
    login(email, password).then((res) => {
      set({ isLoggedIn: true });
    });
  }
}));
