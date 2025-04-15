import { TouchableOpacity, Image, StyleSheet } from "react-native";

export default function CardImage({imgSrc}){
    return(
        <TouchableOpacity style={styles.card}>
            <Image style={styles.image} source={imgSrc}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        width: 100,
        height: 100,
        borderRadius:10

    },
    image:{
        resizeMode: 'contain',
        width:'100%',
        height:'100%',
        borderRadius:10
    }
})


