import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems    : 'center',
    flex          : 1,
    justifyContent: 'center',
  },
  text: {
    fontSize  : 25,
    fontWeight: 'bold',
  }
})

export default Home
