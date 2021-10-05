import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Coinitems = ({ coin }) => {
    return (
        <View style={style.cointainerItem}>
            <View style={style.coinNames}>
                <Image
                    style={style.image}
                    source={{ uri: coin.image }}
                />
                <View style={style.containerNames}>
                    <Text style={style.text}>{coin.name}</Text>
                    <Text style={style.textSymbol}>{coin.symbol}</Text>
                </View>
            </View>
            <View>
                <Text style={style.textPrice}>${coin.current_price}</Text>
                <Text style={[
                    style.pricePercentage,
                    coin.price_change_percentage_24h > 0
                        ? style.priceUp :
                        style.priceDown
                    ]}
                >
                    {coin.price_change_percentage_24h}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    cointainerItem: {
        backgroundColor: '#121212',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    coinNames: {
        flexDirection: 'row'
    },
    containerNames: {
        marginLeft: 10,
    },
    image: {
        width: 20,
        height: 20,
    },
    text: {
        color: '#ffffff'
    },
    textSymbol: {
        color: '#434343',
        textTransform: 'uppercase',

    },
    textPrice:{
      color: '#fff',
      textAlign: 'right'
    },
    pricePercentage: {
        textAlign: 'right'
    },
    priceUp: {
        color: '#00B5B9'
    },
    priceDown: {
        color: '#FC4422'
    }
}
)

export default Coinitems
