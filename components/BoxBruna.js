import { View, StyleSheet } from "react-native";
import React from "react";


export default function BoxBruna() {
    return(
        <View style={styles.box}></View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: 170,
        height: 170,
        borderWidth: 2,
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
