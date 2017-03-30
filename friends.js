import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {Component} from 'react'

class Friends extends Component {
  static navigationOptions = {
    title: ({state}) => `${state.params.user}'s Friends!`,

    header: ({state, setParams}) => ({
      right: (
        <TouchableOpacity onPress={() => setParams({showImage: !state.params.showImage})}>
          <Text style={{padding: 8}}>{state.params.showImage ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      )
    })
  }

  render() {
    const {navigation: {state: {params: {user, friends, showImage}}}} = this.props

    const friendList = friends.join(', ')

    return (
      <View style={styles.container}>
        {showImage &&
          <Image style={styles.image} source={{uri: "https://stridekick.com/assets/stridekick-icon-af20e5950f1f03f95707dc80c6cc491d.png"}} />
        }
        <Text style={styles.text}>{friendList}</Text>
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
  image: {
    height      : 100,
    marginBottom: 12,
    width       : 100
  },
  text: {
    color     : 'green',
    fontSize  : 25,
    fontWeight: 'bold',
  },
})

export default Friends
