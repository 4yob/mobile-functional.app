import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ButtonsEnzo({ color }) {
    return (
        <View style={styles.container}>
                <TouchableOpacity style={styles.button1} color={color}></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: "2rem",
        borderRadius: '15px',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        gap: "1rem",
        alignItems: "center"
    },

    button1: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
    }
})