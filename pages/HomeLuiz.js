import { View, StyleSheet,Text, FlatList, SafeAreaView, Dimensions, Image} from "react-native";
import Cards from "../components/Cards"
import CardImage from "../components/CardImage";

export default function HomeLuiz(){
    const data = [
        { id: "1", imgSrc: "https://placehold.co/100" },
        { id: "2", imgSrc: "https://placehold.co/100" },
        { id: "3", imgSrc: "https://placehold.co/100" },
        { id: "4", imgSrc: "https://placehold.co/100" },
        { id: "5", imgSrc: "https://placehold.co/100" },
        { id: "6", imgSrc: "https://placehold.co/100" }

    ];
        const screenWidth = Dimensions.get("window").width;
        const cardWidth = screenWidth / 3;
    return(
        <View style={styles.main}>
            <View style={styles.header}>
                <Cards estilo={styles.card}/>
                <Text>Profile</Text>
            </View>
            <SafeAreaView>
                <View style={styles.horizontalListContainer}>
                    <FlatList
                    style={styles.horizontalList}
                    horizontal
                    data={data}
                    showsHorizontalScrollIndicator={true}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[styles.cardContainer, { width: cardWidth }]}>
                            <CardImage imgSrc={item.imgSrc}/>
                        </View>
                    )}
                    />
                </View>
        </SafeAreaView>
        <View style={styles.section}>
            <View style={styles.textArea}>
                <Text>Aqui podemos ter textos</Text>
            </View>
            <View style={styles.Image}>
                <Image source={{uri:'https://placehold.co/300x150'}} style={styles.imagemStyle}/>
            </View>
            <View style={styles.textArea}>
                <Text>Aqui também</Text>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        display:'flex',
        width: '100%',
        height: '100%',
        padding:20
    },
    header:{
        display:'flex',
        flexDirection:'row',
        gap:20,
        alignItems:'center',
        padding:20,
    },
    section:{
        padding:20,
        width:'100%',
        height:'100%'
    },
    Image:{
        width:'100%',
        height:'30%',
        borderRadius:10
    },
    imagemStyle:{
        width:'100%',
        height:'100%',
        borderRadius:10
    },
    textArea:{
        width:'100%',
        height: '20%',
        marginTop:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})

