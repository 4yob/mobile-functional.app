import {StyleSheet, TouchableOpacity, Image} from "react-native";

export default function Cards({onPress}){
    return(
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{uri: 'https://placehold.co/50'}} style={styles.imagem}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        width: 50,
        height: 50,
        borderRadius:'50%',
    },
    imagem:{
        borderRadius: '50%',
        width:'100%',
        height:'100%'
    }
})