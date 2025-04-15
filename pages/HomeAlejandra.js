import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList, SafeAreaView, ScrollView } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput style={styles.input} />
                <TouchableOpacity style={styles.button}></TouchableOpacity>
            </View>
            <View style={styles.scrollsection}>
                <View style={styles.icon}>
                </View>
            </View>
            <View style={styles.main}>
                <View style={styles.block}>
                    <View style={styles.top}>
                            <View style={styles.circle}></View>
                        <View style={styles.right}>
                            <Text style={styles.blocktext}>Atividade Avaliativa</Text>
                            <Text style={styles.blocktext}>Mobile - 2TDS1</Text>
                        </View>
                    </View>
                    <View style={styles.middle}>
                        <Image style={styles.blockimage} source={require("../assets/react-icon.png")} />
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.blockinput}>
                            <TextInput style={styles.insert} />
                        <TouchableOpacity style={styles.blockbutton}></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.navigatorbutton} onPress={() => navigation.navigate("ProfileAlejandra")}>
                    <Text style={styles.text}>NAVEGAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        padding: 20,
    },
    input: {
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 25,
        width: 240,
        height: 40,
        padding: 2,
    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#000',
    },
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    block: {
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        height: 390,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 25,
        padding: 15,
        gap: 20,
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#000',
    },
    blocktext: {
        color: '#000',
        fontWeight: 700,
    },
    middle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    blockimage: {
        width: 225,
        height: 225,
    },
    bottom: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    blockinput: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 25,
        width: 240,
        height: 40,
    },
    blockbutton: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#000',
    },
    insert: {
        width: '100%',
        height: '100%',
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        padding: 20,
    },
    navigatorbutton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 225,
        height: 50,
        backgroundColor: '#000',
        borderRadius: 50,
    },
    text: {
        fontFamily: 'arial',
        color: '#FFF',
        fontWeight: 700,
    }
})