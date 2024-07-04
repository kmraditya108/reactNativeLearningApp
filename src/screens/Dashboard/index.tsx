// Dashboard
import * as React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Types } from '../../redux/actionTypes';

const Dashboard:React.FC = () => {
    let countVal = useSelector(store => store.count.counterVal);
    let dispatch = useDispatch();
    return(
        <View style={{flex:1, backgroundColor:'gary', justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'sky', fontSize:32}}>
                {countVal}
            </Text>

            <TextInput style={{borderWidth:1, borderColor:"#987421", width:'100%'}} keyboardType='numeric' onChangeText={(e)=>dispatch({type:Types.COUNT_INCREASE, payload:e})} placeholder='Add some name' placeholderTextColor={'#987421'}/>
        </View>
    )
}

export default Dashboard;

