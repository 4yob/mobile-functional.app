import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function CardZani({imagem, text}){
    return(
        <View style={styles.cardContainer} >
            <Image source={ imagem } style={styles.img}/>
            <Text> {text} </Text>
            <TouchableOpacity style={styles.button}>
                <AntDesign name="hearto" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: "90%",
        height: "35%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: "2rem"
    },
    img: {
        width: "5rem",
        height: "5rem",
        borderRadius: "1rem",
        border: "solid 2px",
        margin: "1rem"
    },
    button:{
        margin: "1rem"
    }
})