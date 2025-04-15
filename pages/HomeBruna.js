import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function HomeBruna() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.bottom}></View>
                <View style={styles.right}>
                    <View style={styles.bottom}></View>
                    <View style={styles.bottom}></View>
                </View>
            </View>
            <View style={styles.main}>
                <View style={styles.blocks}>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                </View>
                <ScrollView>
                    <View style={styles.cards}>
                        <View style={styles.card}>
                            <Image style={styles.imageCard} source={require("../assets/react.png")} />
                            <Text style={styles.text}>React.js é usado para criar interfaces de utilizador interativas, para páginas web e aplicações móveis.</Text>
                        </View>
                        <View style={styles.card}>
                            <Image style={styles.imageCard} source={require("../assets/react.png")} />
                            <Text style={styles.text}>React.js é usado para criar interfaces de utilizador interativas, para páginas web e aplicações móveis.</Text>
                        </View>
                        <View style={styles.card}>
                            <Image style={styles.imageCard} source={require("../assets/react.png")} />
                            <Text style={styles.text}>React.js é usado para criar interfaces de utilizador interativas, para páginas web e aplicações móveis.</Text>
                        </View>
                        
                        
                    </View>
                </ScrollView>
                    
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        width: "100%",
        height: 100,
        position: 'fixed',
        top: 65,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'fixed',
        gap: '8rem',
    },
    right: {
        display: 'flex',
        flexDirection: 'row',
    },
    bottom: {
        width: 50,
        height: 50,
        backgroundColor: '#000',
        borderRadius: 100,
    },
    main: {
        width: '100%',
        height: '82.2%',
        position: 'fixed',
        bottom: '0',
    },
    blocks: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: '20px'
    },
    box: {
        width: 170,
        height: 170,
        borderWidth: 2,
        borderRadius: 30,
    },
    cards: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 30,
    },
    card: {
        width: 360,
        height: 250,
        borderRadius: 10,
        borderWidth: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageCard: {
        width: 358,
        height: 180,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    text: {
        width: 350,
        padding: 3,
        fontSize: 16,
    }
})