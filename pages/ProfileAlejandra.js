import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ProfileAlejandra() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ALEJANDRA BARROS</Text>
            <Image source={require("../assets/alejandra.jpeg")} style={styles.imgprofile} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    title: {
        color: '#CD5C5C',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    imgprofile: {
        width: 50,
        height: 50,
        borderRadius: '50%',
    },
});