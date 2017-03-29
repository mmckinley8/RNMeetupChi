import React, {Component} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

class Profile extends Component {
  render() {
    const {navigate} = this.props.navigation

    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.text}>View friends</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems     : 'center',
    alignSelf      : 'center',
    backgroundColor: 'blue',
    borderRadius   : 5,
    height         : 50,
    justifyContent : 'center',
    width          : 200,
  },
  container: {
    alignItems    : 'center',
    flex          : 1,
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
})

export default Profile
