import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Cards({estilo, navegar}){
    return(
        <View style={styles.card}>
            <TouchableOpacity onPress={{navegar}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        width: 50,
        height: 50,
        borderRadius:'50%'
    }
})