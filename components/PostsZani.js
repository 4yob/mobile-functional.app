import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Post({imagem, text}){
    return(
        <View style={styles.containerPost}>
            <Image source={imagem} style={styles.img}/>
            <Text>
                {text}
            </Text>
            <View style={styles.buttons}>
                <TouchableOpacity>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="minuscircleo" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="retweet" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerPost: {
        width: "110%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: "2rem"
    },
    buttons: {
        flexDirection: "row",
        gap: "1rem"
    },
    img: {
        width: "4rem",
        height: "4rem",
    }
})