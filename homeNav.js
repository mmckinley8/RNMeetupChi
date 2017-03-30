import Friends from './friends'
import Home from './home'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'
import {StackNavigator} from 'react-navigation'
import {TouchableOpacity} from 'react-native'

const HomeNav = StackNavigator({
  Home: {
    screen: Home,

    navigationOptions: {
      header: ({navigate}) => ({
        title: 'Home',

        right: (
          <TouchableOpacity onPress={() => navigate('Friends', {user: 'Mike', friends: ['Andy', 'John', 'Hillary', 'Lena']})}>
            <Icon style={{padding: 8}} name='user-plus' size={20} />
          </TouchableOpacity>
        )
      })
    }
  },

  Friends: {
    screen: Friends
  }
})

export default HomeNav
