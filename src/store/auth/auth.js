import {create} from 'zustand';
import {login} from '../../utils/auth';
export const useAuthStore = create((set) => ({
  auth: {},
  login: (email, password) => {
    login(email, password).then((res) => {
      set({ auth: res });
    });
  }
}));
