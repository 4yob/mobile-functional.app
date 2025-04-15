import { View, StyleSheet } from "react-native";
import Cards from "../components/Cards"

export default function HomeLuiz(){
    return(
        <View style={styles.main}>
            <Cards/>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        display:'flex',
        backgroundColor:'blue',
        width: '100%',
        height: '100%'
    },

})

