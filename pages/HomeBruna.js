import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import BottomBruna from "../components/BottomBruna";
import BoxBruna from "../components/BoxBruna"

export default function HomeBruna() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <BottomBruna />
                    <View style={styles.right}>
                        <BottomBruna />
                        <BottomBruna />
                    </View>
                </View>
                <View style={styles.main}>
                    <View style={styles.blocks}>
                        <BoxBruna />
                        <BoxBruna />
                    </View>
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

                </View>
            </View>
        </ScrollView>
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
        top: 0,
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
        gap: '1rem',
    },
    main: {
        width: '100%',
        height: '90%',
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