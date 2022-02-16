import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function Todo(props) {
    return (
        <View style={[styles.item, {margin: 8, padding: 8}]}>
            <Text>{props.item}</Text>
            <Button title="Delete" onPress={() => props.delete(props.item)} color={"red"} />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'whitesmoke',
    }
})
