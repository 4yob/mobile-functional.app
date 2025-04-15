import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ProfileLuiz(){
    return(
        <View>
            <Image source={{uri:'https://avatars.githubusercontent.com/u/163127415?v=4'}} />
            <Text>Luiz</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("HomeLuiz") }/>
        </View>
    )
}