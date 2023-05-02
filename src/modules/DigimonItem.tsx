import React, {useContext} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../../Context";

function DigimonItem() {

    const {digimons} = useContext(Context);

    const allDigimons = digimons.map(digimon => {
        return (
            <View key={digimon.name}>
                <Text>{digimon.name}</Text>
                <Text>{digimon.level}</Text>
            </View>
        )
    })

    return (
        <View>
            {allDigimons}
        </View>
    )
}

export default DigimonItem;