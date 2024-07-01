import React, { useRef, useState } from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, Button, Pressable, TouchableHighlight, FlatList, TextInput } from 'react-native';
import SideMenu from "../common/SideMenu";
import { findAthMagicalNumber, findLCM } from "../../utils/findLCM";

const numbers = [1, 2, 3, 4,];
const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
];

const Home = (): React.ReactNode => {
    const refB = useRef<TextInput | null>(null)
    const refC = useRef<TextInput | null>(null)

    const layoutHandler = e => {
        // console.log(e);
    }

    const callMap = () => {
        console.log("---------- callMap - Start --------------");

        var new_array = numbers.map((element, index, array) => {
            // Return value for new_array
            console.log(element, index, array);
            // if(index <= 4)
            // array.push(`item-${index}`)
            return element + index;
        }, 10);
        console.log("new_array :: ", new_array);
        console.log("---------- callMap - Over -------------");
    }


    const callReducer = () => {
        console.log("---------- callReducer - Start --------------");

        var new_array = numbers.reduce((element, index, array) => {
            // Return value for new_array
            console.log(element, index, array);
            return element + index;

        }, 2);
        console.log("new_array :: ", new_array);
        console.log("---------- callReducer - Over -------------");
    }


    type ItemProps1 = {
        name: string;
        grade: number;
    }

    type ItemProps = { title: { name: string; grade: number; }; }

    const Item = ({ title }: ItemProps) => (
        <View style={ss.item}>
            {/* <Text style={ss.title}>{title}--{grade}</Text> */}
            <Text style={ss.title}>{title.grade}</Text>
        </View>
    );




    type LCMProps = { A: number | null, B: number | null, C: number | null }
    const [LCMVals, setLCMVals] = useState<LCMProps>({
        A: null,
        B: null,
        C: null
    });

    const LCMHandler = () => {
        const { A, B } = LCMVals;
        let LCM = findLCM(A as number, B as number);
        console.log("LCM : ", LCM)
    }

    const finalInputHandler = () => {
        const { A, B, C } = LCMVals;
        let nm = findAthMagicalNumber(A as number, B as number, C as number);
        console.log("finalInputHandler nm == ", nm);
        
        return nm;
    }
    return (
        <View style={ss.container} onLayout={(e) => layoutHandler(e)}>
            <View style={{ flex: 1 }}>
                <TextInput autoFocus returnKeyType="next" keyboardType="numeric" style={{ borderWidth: 1, padding: 10 }} placeholder="A here" onChangeText={e => setLCMVals({
                    ...LCMVals,
                    A: Number(e)
                })}
                    onSubmitEditing={() => refB.current?.focus()} />


                <TextInput returnKeyType="next" ref={refB} keyboardType="numeric" style={{ borderWidth: 1, padding: 10 }} placeholder="B here" onChangeText={e => setLCMVals({
                    ...LCMVals,
                    B: Number(e)
                })} onSubmitEditing={() => refC.current?.focus()} />

                <TextInput ref={refC} returnKeyType="done" keyboardType="numeric" style={{ borderWidth: 1, padding: 10 }} placeholder="C here" onChangeText={e => setLCMVals({
                    ...LCMVals,
                    C: Number(e)
                })} onSubmitEditing={() => finalInputHandler()}/>

                <TouchableOpacity style={ss.prassable} onPress={callMap}>
                    <Text>Map()</Text>
                </TouchableOpacity>

                <Button title="Reducer-Button" onPress={callReducer} />

                <TouchableHighlight style={ss.prassable} onPress={LCMHandler}>
                    <Text>LCMHandler</Text>
                </TouchableHighlight>
                <SideMenu />
            </View>


            {/* <View style={{ flex: 4 }}>
                <FlatList
                    data={students}
                    renderItem={({item}) => <Item title={item}/>}
                    keyExtractor={(item) => item.grade}
                />
            </View> */}
        </View>
    )
}

const ss = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection:'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 200,
        borderWidth: 1
    },
    prassable: {
        // flex:1,
        borderWidth: 1,
        borderColor: 'skyblue',
        backgroundColor: 'lightblue',
        // width: '96%',
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
})
export default Home;