import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Navbar() {
    return (
        <View style={styles.navbar}>
            <Text>Home</Text>
            <Text>Favoritos</Text>
            <Text>Ver por Nivel</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        height: 50,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});

export default Navbar;