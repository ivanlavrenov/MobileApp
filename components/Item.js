import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {Link} from "react-router-native";

export default function Item() {
    return (
        <Link to="/Card"  underlayColor="transparent">
            <View style={styles.item}>
                <View style={styles.item_title}>
                    <Text style={styles.item_task}>Вымыть посуду</Text>
                    <Text style={styles.item_price}>50
                    рублей</Text>
                </View>
                <Text styles={styles.description}>Описание задания в несколько строк. Обязательно нужно расписать все
                    детали, чтобы пользователь понял.</Text>
            </View>
        </Link>
    )
}

const styles = StyleSheet.create({
    item: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        padding: 12,
        borderRadius: 12,
    },
    item_title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    item_task: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 21,
    },

    item_price: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 21,
    },

    description: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 18
    }
})
