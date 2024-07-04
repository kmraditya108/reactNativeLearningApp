import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TypeOfFunction, decrement, increment, incrementVal, resetCount } from '../../redux/actions/countAction';
import { SigninContext } from '../../contexts/SigninContext';
import { Types } from '../../redux/actionTypes';

const Counter: React.FC = ({ navigation }: any) => {
  const { login, isLoggedIn, setIsLoggedIn } = useContext(SigninContext)
  const countState = useSelector(store => store.count.counterVal);
  const dispatch = useDispatch();

console.log("redux countState :: ", countState);


useEffect(() => {
  if(countState<0){
    Alert.alert("Do you still want to proceed, the value is less than 0....")
  }
}, [countState])

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const handleIncrement = () => {
    // dispatch(increment());
    dispatch({type:Types.COUNT_INCREASE});
  };

  const handleResetCount = () => {
    dispatch(resetCount());
  };


  return (
    <View style={ss.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20
        }}>
        <Text>Counter : {countState}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: 10 }}>
        <TouchableOpacity onPress={() => handleIncrement()} style={ss.btn}>
          <Text style={ss.btn_text}> Increment+ </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleResetCount()} style={ss.btn}>
          <Text style={ss.btn_text}> Reset-0 </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => decrementHandler()} style={ss.btn}>
          <Text style={ss.btn_text}> Decrement- </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[ss.sbmtBtn, {bottom:100}]} onPress={() => navigation.navigate("Dashboard")}>
        <Text style={ss.btn_text}>Go to Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ss.sbmtBtn} onPress={() => navigation.navigate("Login")}>
        <Text style={ss.btn_text}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const ss = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  sbmtBtn: {
    backgroundColor: '#987421',
    padding: 10,
    borderRadius: 10,
    position:'absolute',
    bottom:10,
    width:"100%",
  },
  btn: {
    backgroundColor: '#086972',
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  btn_text: {
    fontSize: 23,
    color: '#fff',
    textAlign: 'center'
  },
});

export default Counter;
