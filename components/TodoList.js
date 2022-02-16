import React, {useState} from "react";
import {Text, View, StyleSheet, Button, ScrollView, TextInput} from "react-native";
import Todo from "./Todo";

export default function TodoList() {

    const [title , setTitle] = useState("TodoList");
    const [text , setText] = useState();
    const [list, setList] = useState(["Hello World"]);

    //AddItem method
    const addItem = () => {
        const updatedList = list;
        updatedList.push(text);
        setList(updatedList);
        setText('');
    }

    //DeleteItem method
    function DeleteItem(index) {
        const updatedList = list.filter((todo) => todo !== index);
        setList(updatedList);
    }
    return (
        <View style={{width: "80%", marginBottom: 60}}>  
        <Text style={[styles.align, styles.font]}>{title}</Text>   
        <ScrollView style={{height: 200}}>
         {list.map((x ,index) => 
         <Todo key={index} item={x} index={index} delete={DeleteItem} />
         )}
        </ScrollView>
        <View>
        <TextInput 
        placeholder={"Add Item"} 
        style={styles.input}
        value={text}
        onChangeText={(text) => setText(text)}
        ></TextInput>
        <Button title="Add" onPress={addItem} />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    align: {
        alignSelf: 'center',
    }, 
    font: {
        fontWeight: 'bold',
    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 8, 
        padding: 8,
    }
})
