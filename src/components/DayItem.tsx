import React from "react";
import { TouchableHighlight, Text, StyleSheet, View } from "react-native";

export type DayItemProps = {
    onPress?: ()=>void,
    date: Date,
    length: number
}

export default (
    {
        onPress,
        date,
        length,
    }:DayItemProps
)=>{
    return (
        <TouchableHighlight
            onPress={()=>onPress && onPress()}
            underlayColor="white"
        >
            <View style={styles.container}>
                <Text style={styles.date}> {`${date.toDateString()}`} </Text>
                <Text style={styles.length}> {`${length/1000} km`} </Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      height: 40,
      padding: 5,
      margin: 3,
      justifyContent: "space-between",
      alignItems: "center",
      textAlign: "center",
      borderWidth: 1,
    },
    date: {
        borderWidth: 1,

    },
    length: {
        borderWidth: 1,

    }
});