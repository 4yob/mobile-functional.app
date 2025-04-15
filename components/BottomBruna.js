import { View, StyleSheet, TouchableOpacity } from "react-native";

export default function BottomBruna() {
    return (
        <View style={styles.bottom}>
            {/* <TouchableOpacity
                style={styles.perfil}
                onPress={() => navigation.navigate("ProfileBruna")}>
                <Text>O</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    bottom: {
        width: 50,
        height: 50,
        backgroundColor: '#000',
        borderRadius: 100,
    }
})
