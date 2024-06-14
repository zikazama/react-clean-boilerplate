import { useAuthStore } from '../store/useAuthStore';
import { AuthService } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const { token, setToken, clearToken } = useAuthStore();
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      const response = await AuthService.login(email, password);
      setToken(response.token);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const response = await AuthService.register(email, password);
      setToken(response.token);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    clearToken();
    navigate('/login');
  };

  return {
    token,
    login,
    register,
    logout,
  };
};
