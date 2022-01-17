import React, {
  createContext, useCallback, useState, useContext,
} from 'react';
import PropTypes from 'prop-types';

import { authEmail } from '../Firebase/authLogin';

interface IAuthContext {
  signed: boolean;
  login(email: string, password: string): void;
  logout(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [signed, setSigned] = useState<boolean>(() => {
    const token = localStorage.getItem('@off-let:signed');

    if (token) {
      return true;
    }
    return false;
  });

  const login = useCallback(async (email: string, password: string) => {
    const response = await authEmail(email, password);
    if (response?.user?.email === email) {
      localStorage.setItem('@off-let:signed', response.user.email);
      setSigned(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('@off-let:signed');
    setSigned(false);
  };

  return (
    <AuthContext.Provider value={{ signed, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, useAuth };
