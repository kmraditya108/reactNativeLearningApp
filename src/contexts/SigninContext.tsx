import * as React from 'react';
import {createContext} from 'react';
import Login from '../screens/Login';
import { Alert } from 'react-native';

type AppContext = {
  login: object;
  handleLogin?: HandleLogin;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  signOut:()=> React.ReactNode;
};
type LoginProps = {username: string; password: string};
type HandleLogin = (username: string, password: string) => void;



export const SigninContext = createContext<AppContext>({} as AppContext) //<AppContext | undefined>(undefined);




export const SigningContextWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [login, setLogin] = React.useState<LoginProps>({
    username: '',
    password: '',
  });
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin: HandleLogin = async (
    username: string,
    password: string,
  ) => {
    const userData = {username, password};
    setLogin(userData);
  };

  const signOut = () => {
    Alert.alert('You are successfully logged out!!');
    return <Login />;
  }

  if(!isLoggedIn){
    Alert.alert('You are not logged in!!');
    return <Login />
  }

  return (
    <SigninContext.Provider
      value={{login, handleLogin, isLoggedIn, setIsLoggedIn, signOut}}>
      {children}
    </SigninContext.Provider>
  );
};
