import React from "react";
import { View, Text, TextInput, TouchableOpacity, Button, Image, StyleSheet } from "react";

export default function App() {
    return (
        <View style={StyleSheet.container}>
            <View style={styles.topcontent}>
                <Text style={styles.texttop}>Este é o wireframe 4!</Text>
                <Image source={require("../assets/bobesponja")} style={styles.imagebob} />
                <Image source={require("../assets/patrickestrela")} style={styles.imagepatrick} />
                <TextInput style={input} placeholder="Digite algo!" />
                <TouchableOpacity onPres={() => alert("Saved!")} />
            </View>

            <View style={styles.midcontent}>
                
            </View>
        </View>
    );
}