import Friends from './friends'
import Icon from 'react-native-vector-icons/FontAwesome'
import Profile from './profile'
import React from 'react'
import {StackNavigator} from 'react-navigation'

const ProfileNav = StackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: {
        title: 'Profile'
      }
    }
  },

  Friends: {
    screen: Friends,
  }
}, {
  mode: 'modal'
})

export default ProfileNav 
