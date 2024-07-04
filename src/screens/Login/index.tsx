import React, { useRef, useState } from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, Button, Pressable, TouchableHighlight, FlatList, TextInput } from 'react-native';
import {useSelector} from 'react-redux'
import PopupModal from "../common/PopupModal";
import LoginComponent from "./LoginComponent";


export type LoginProps = { username: string | null, password: string | null };

const Login = ({navigation}:any): React.ReactNode => {

    const countState = useSelector(store => store.count.counterVal);

    const refB = useRef<TextInput | null>(null);

    const [loginTraits, setLoginTraits] = useState<LoginProps>({
        username: null,
        password: null,
    });

    const[popupMsg, setPopupMsg] = useState('');

    const submitHandler = () => {
        const{username, password} = loginTraits;

        console.log(username, password);
        
        if((!username) || (!password)){
            setPopupMsg("Please check the required field.")
        }else{
            navigation.navigate("Home", {username, password});
        }
    }

    return (
        <View style={ss.container}>
            <Text style={ss.loginMainText}>Please login to the app, You have the counter:{countState}</Text>
            <LoginComponent onSubmit={submitHandler} 
            // formField = {setLoginTraits}
            />




            {/* <View style={{height:2, backgroundColor:'gray', marginVertical:10}}/> */}
            {/* <View style={ss.formContainer}>
                <TextInput
                    autoFocus
                    // onFocus={this.setFocus.bind(this, true)}
                    // onBlur={this.setFocus.bind(this, false)}
                    returnKeyType="next"
                    style={ss.inputField}
                    placeholder="Username here"
                    onChangeText={e => setLoginTraits({
                        ...loginTraits,
                        username: e
                    })}
                    // editable
                    inputMode="numeric"
                    // keyboardType="numeric"
                    onSubmitEditing={() => refB.current?.focus()} />


                <TextInput
                    ref={refB}
                    secureTextEntry={true}
                    style={ss.inputField}
                    placeholder="Password here"
                    onChangeText={e => setLoginTraits({
                        ...loginTraits,
                        password: e
                    })}
                    returnKeyType="done"
                    onSubmitEditing={() => submitHandler()} />

            </View>


            <TouchableOpacity style={ss.prassable} onPress={submitHandler}>
                    <Text>Submit</Text>
                </TouchableOpacity> */}



                {/* <Button title="Reducer-Button" onPress={submitHandler} />

                <TouchableHighlight style={ss.prassable} onPress={LCMHandler}>
                    <Text>LCMHandler</Text>
                </TouchableHighlight> */}
                {popupMsg && <PopupModal msg={popupMsg} okHandler={()=>setPopupMsg('')} modalOpen={true}/>}
        </View>
    )
}

const ss = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20
    },
    formContainer: {
        marginTop: 60,
        marginBottom: 10,
    },
    prassable: {
        borderWidth: 1,
        borderColor: 'skyblue',
        backgroundColor: 'lightblue',
        alignItems: 'center',
        padding: 10,
        marginVertical: 15,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    inputField: { 
        borderWidth: 1, 
        padding: 10,
        borderRadius: 20,
        marginVertical: 5
    },
    inputErr: {
        borderWidth: 1,
        borderColor: 'red'
    },
    loginMainText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        letterSpacing: 0.89
    }
})
export default Login;