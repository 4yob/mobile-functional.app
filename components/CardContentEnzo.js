import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function CardContentEnzo({ image, text, button }) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image1} />
            <View style={styles.info}>
                <Text style={styles.text1}>{text}</Text>
                <TouchableOpacity style={styles.button1}>{ }</TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        width: 350,
        height: 110,
        borderRadius: '15px',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        gap: "1rem",
        alignItems: "center"
    },

    image1: {
        width: "5rem",
        height: "5rem",
        borderRadius: "5px"
    },

    info: {
        display: "flex",
        flexDirection: "row",
        gap: "1rem"
    },

    text1: {
        fontSize: "20px"
    },

    button1: {
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
        backgroundColor: "red"
    }
})