import React, {useEffect, useState} from 'react'
import { TextInput } from 'react-native'
import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native'
import Coinitems from './components/Coinitems'

const App = () => {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState([])

  const loadedData = async () =>{
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json()
    console.log(data)
    setCoins(data)
  }

  useEffect(() => {
    loadedData()   
  }, [])



  return (
    <View style ={styles.container}>
      <StatusBar/>
      <View style={styles.header}>
        <Text style={styles.title}>CryptoOsmon</Text>
        <TextInput style={styles.searchInput}
        placeholder="Search a Coin"
        placeholderTextColor= '#858585'
        onChangeText={text => setSearch(text)}
        />
      </View>
      <FlatList
      style={styles.list}
      data={coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(search) ||
          coin.symbol.toLowerCase().includes(search))
      }
      renderItem={({item})=> {
        return <Coinitems coin={item}/>
      }}
     
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    alignItems: 'center',
    flex: 1
  },
  title:{
    color: '#fff',
    marginTop: 10,
    fontSize: 20,
  },
  list:{
    width: '90%',
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 10
  },
  searchInput:{
    color: '#fff',
    borderBottomColor: '#4657CE',
    borderBottomWidth: 1,
    width: '40%',
    textAlign: 'center'
  }
})

export default App
