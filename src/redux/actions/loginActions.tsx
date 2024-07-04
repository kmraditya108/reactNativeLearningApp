import {Types} from '../actionTypes';

export type LoginTypes = 'LOGIN_INIT' | 'LOGIN_SUCCESS' | 'LOGIN_FAILURE';
export type loginDataProps = {userName: string; password: string};
export type loginMsgProps = {msg: string};




export type loginActionProps =
  | {type: string; payload?: loginDataProps}
  | loginMsgProps;

const loginInit = (data: loginDataProps) => {
  console.log('login inti >>> ', data);

  return {
    type: Types.LOGIN_INIT,
    payload: data,
  };
};

const loginSuccess = (data: loginDataProps) => ({
  type: Types.LOGIN_SUCCESS,
  payload: data,
});

const LoginFail = (msg: loginMsgProps) => ({
  type: Types.LOGIN_FAILURE,
  msg: msg,
});

export {loginInit, loginSuccess, LoginFail};
