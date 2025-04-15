import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import CardContentEnzo from "../components/CardContentEnzo";
import ButtonsEnzo from "../components/ButtonsEnzo";

export default function PageEnzo() {
    return (
        <View style={styles.container}>
            <View style={styles.topcontent}>
                <Text style={styles.texttop}>Este é o wireframe 4!</Text>
                <View style={styles.images}>
                    <Image source={require("../assets/bobesponja.png")} style={styles.imagebob} />
                    <Image source={require("../assets/patrickestrela.png")} style={styles.imagepatrick} />
                </View>
                <View style={styles.interaction}>
                    <TextInput style={styles.input} placeholder="Digite algo!" />
                    <TouchableOpacity style={styles.button} onPres={() => alert("Saved!")} />
                </View>
            </View>

            <View style={styles.midcontent}>
                <CardContentEnzo image={require("../assets/bobesponja.png")} text={"Bob Esponja"} />
                <CardContentEnzo image={require("../assets/patrickestrela.png")} text={"Patrick Estrela"} />
                <CardContentEnzo image={require("../assets/bobesponja.png")} text={"Bob Esponja"} />
            </View>

            <View style={styles.bottomcontent}>
                <ButtonsEnzo color={"red"} />
                <ButtonsEnzo />
                <ButtonsEnzo />
                <ButtonsEnzo />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        display: "flex",
        padding: "1rem"
    },

    topcontent: {
        display: "flex",

    },

    texttop: {
        fontSize: "32px",
        textAlign: "center"
    },

    images: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "2rem"
    },

    imagebob: {
        width: "10rem",
        height: "10rem",
        borderRadius: "5px"
    },

    imagepatrick: {
        width: "10rem",
        height: "10rem",
        borderRadius: "5px"
    },

    interaction: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
        gap: "1rem"
    },

    input: {
        width: "17rem",
        height: "3rem",
        borderRadius: "5px",
        textAlign: "center",
        letterSpacing: "0.3rem",
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
    },

    button: {
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
        backgroundColor: "green"
    },

    midcontent: {
        marginTop: "2rem",
        alignItems: "center",
        gap: "1rem",
    },

    bottomcontent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        gap: "1rem",
        alignItems: "center"
    }
});