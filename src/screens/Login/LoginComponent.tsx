import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import { Types } from '../../redux/actionTypes';
import {decrement, increment, resetCount} from '../../redux/actions/countAction';
import { loginActionProps, loginDataProps, loginInit, loginMsgProps, loginSuccess } from '../../redux/actions/loginActions';
import Home from '../Home';
import { SigninContext } from '../../contexts/SigninContext';
import { LoginProps } from '.';

type LoginComponentProps = {
  onSubmit: () => void;
  formField?: LoginProps
}

const LoginComponent: React.FC<LoginComponentProps> = ({onSubmit, formField}) => {
  // const{login, isLoggedIn, setIsLoggedIn} = useContext(SigninContext)
  const reduxState = useSelector(store => store);
  const loginState = useSelector(store => store.login);

  const dispatch = useDispatch();


  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitHandler = async() => {
    await dispatch({type:Types.LOGIN_INIT});
    onSubmit();
  };

  useEffect(() => {
    console.log('Login -state >> ', reduxState, loginState);

    // We are checking 1st Login started or nnot based on that we are calling for Login success reducer
    if(loginState && loginState.isLoginStarted){
      const payload = {
        userName,
        password
      }

      // if(loginState && loginState.loginSuccess){
      //   setIsLoggedIn(true);
      // }
      dispatch(loginSuccess(payload))
    }


  }, [reduxState, loginState]);

  return (
    <View style={ss.container}>

      <View style={ss.inputContainer}>
        <Text style={ss.inputLabel}>Full Name</Text>
        <TextInput
          style={ss.inputField}
          value={userName}
          placeholder="full name here.."
          autoCapitalize="words"
          enterKeyHint="next"
          onChangeText={e => setUserName(e)}
        />
      </View>
      <View style={ss.inputContainer}>
        <Text style={ss.inputLabel}>Password</Text>
        <TextInput
          style={ss.inputField}
          value={password ? password : ''}
          secureTextEntry={true}
          placeholder="Password"
          enterKeyHint="done"
          onChangeText={e => setPassword(e)}
        />
      </View>
      <TouchableOpacity style={ss.sbmtBtn} onPress={() => submitHandler()}>
        <Text style={ss.btn_text}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const ss = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems:'center',
    justifyContent:'center',
    marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'column',
    marginVertical: 10,
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'gray',
  },
  inputLabel: {
    fontWeight: '700',
    color: '#000',
  },
  inlineButtons: {
    // marginHorizontal: 10,
    // borderWidth: 1,
    // borderColor: '#0000',
    // flex:1
    // backgroundColor:'gray',
  },
  btnTxt: {
    color: 'red',
    borderWidth: 1,
    borderColor: 'blue',
  },

  sbmtBtn: {
    backgroundColor: '#987421',
    padding: 10,
    // margin: 10,
    borderRadius: 10,
    justifyContent:'center'
  },

  btn: {
    backgroundColor: '#086972',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btn_text: {
    fontSize: 23,
    color: '#fff',
    textAlign: 'center'
  },
});

export default LoginComponent;
