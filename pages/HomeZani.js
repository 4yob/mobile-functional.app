import React from "react";
import { View, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import CardZani from "../components/CardZani";
import Post from "../components/PostsZani";

export default function HomeZani(){
    return(
        <View style={styles.container}>
            <View style={styles.cards}>
                <CardZani imagem={require("../assets/charizard.png")} text={"charizard é um pokemon zica"}/>
                <CardZani imagem={require("../assets/gyrados.png")} text={"gyrados é um pokemon zica"} />
                <AntDesign name="rightcircleo" size={24} color="white" />
            </View>
            <View style={styles.posts}>
                <Post imagem={require("../assets/charizard.png")} text={"text"} />
                <Post imagem={null} text={"text"} />
                <Post imagem={null} text={"text"} />
                <Post imagem={require("../assets/charizard.png")} text={"text"} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
    },
    cards: {
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        height: "40%",
        borderRadius: "1rem",
        gap: "1rem"
    },
    posts: {
        alignItems: "center",
        justifyContent: "center",
    },
});