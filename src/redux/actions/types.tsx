import {Types} from '../actionTypes';

export type loginPayloadProps = {userName: string; password?: string};
export type loginResponseMsg = {msg: string};

export type ActionProps = {
  type: string;
  payload?: loginPayloadProps;
};

export type LoginProps=ActionProps & loginResponseMsg;

// export const loginInit = (data: LoginProps) => ({
//   type: Types.LOGIN_INIT,
//   payload: data,
// });

// export const loginSuccess = (data: loginResponseMsg) => ({
//   type: Types.LOGIN_SUCCESS,
//   payload: data,
// });

// export const loginFailure = () => ({
//   type: Types.LOGIN_FAILURE,
// });
