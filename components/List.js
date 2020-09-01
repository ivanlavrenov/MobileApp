import React from "react";
import {StyleSheet, View, Text, ScrollView} from "react-native";
import Item from "./Item";

export default function List() {
    return (
        <ScrollView style={styles.main_container}>
            <View style={styles.main}>
                <View style={styles.container}>
                    <View style={styles.list}>
                        <Text style={styles.list_title}>Все задачи</Text>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: '#E5E5E5',
    },
    main: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        width: 351,
        flex: 1,
        alignItems: 'center',
    },
    list_title:{
        alignItems: 'flex-start',
        fontWeight: 'bold',
        fontSize: 34,
        lineHeight: 41,
        marginBottom: 20,
        marginTop: 45,
        marginLeft: 10
    },
});
