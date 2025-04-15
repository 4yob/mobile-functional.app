import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ProfileBruna() {
    return(
        <View style={styles.container}>
            <Image source={require("../assets/Bruna.png")} />
            <Text>Bruna Nascimento Savelli</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})