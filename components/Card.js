import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import {Link} from "react-router-native";


export default function Card() {
    return (
        <View>
            <View style={styles.card_title}>
                <Link to="/" style={styles.link} underlayColor="transparent">
                    <View style={styles.card_button_block}>
                        <Image style={styles.image} source={require('./img/Back.png')}></Image>
                        <Text style={styles.card_button_text}>Все задачи</Text>
                    </View>
                </Link>
                <Text style={styles.card_title_text}>Описание</Text>
            </View>
            <View style={styles.card_main_block}>
                <View style={styles.card_block}>
                    <Text style={styles.card_item_task}>Название задачи</Text>
                    <Text style={styles.card_item_description}>Описание задания в несколько строк. Обязательно нужно расписать все детали, чтобы пользователь понял.</Text>
                    <Text style={styles.card_item_price}>100 б.</Text>
                </View>
            </View>
            <View style={styles.card_bottom_block}>
                <TouchableOpacity style={styles.card_bottom}>
                    <Text style={styles.card_bottom_text}>Завершить задание</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card_title: {
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        height: 74,
        padding: 28,
        justifyContent: 'center',
    },

    link: {
        right: 120,
        height: 50,
        width: 95
    },

    card_button_text: {
        color: '#007AFF',
        fontSize: 17,
    },

    card_title_text: {
        fontSize: 17,
        paddingTop: 28,
        position: 'absolute'
    },

    image: {
        width: 11,
        height: 20,
        marginRight: 6
    },

    card_button_block: {
        flexDirection: 'row',
    },


    card_main_block:{
        alignItems: 'center',
        marginTop: 31,
    },

    card_block:{
        width: 327,
    },

    card_item_task:{
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 28,
        marginBottom: 8
    },

    card_item_description:{
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 18,
        marginBottom: 31
    },

    card_item_price:{
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 28,
    },

    card_bottom:{
        alignSelf:'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#23C782',
        borderRadius: 8,
        width: 351,
        height: 42,
    },

    card_bottom_text:{
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 18
    },

    card_bottom_block:{
        height: 390,
        justifyContent: 'flex-end',
    },

})
