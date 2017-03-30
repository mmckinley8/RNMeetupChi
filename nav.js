import {TabNavigator, TabView} from 'react-navigation'

import HomeNav from './homeNav'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Platform} from 'react-native'
import ProfileNav from './profileNav'
import React from 'react'

const Nav = TabNavigator({
  Home: {
    screen: HomeNav,
    navigationOptions: {
      tabBar: {
        label: 'Home',
        icon : ({tintColor}) => <Icon name='home' size={20} style={{color: tintColor}} />
      }
    }
  },

  Profile: {
    screen: ProfileNav,
    navigationOptions: {
      tabBar: ({state}) => ({
        label  : 'Profile',
        icon   : ({tintColor}) => <Icon name='user' size={20} style={{color: tintColor}} />,
        visible: state.routes.length > 1 ? false : true,
      })
    }
  }
},
// Tab bar customization:
{
  // swipeEnabled   : false,
  tabBarComponent: Platform.select({android: TabView.TabBarTop, ios: TabView.TabBarBottom}),
  tabBarPosition : 'bottom',
  tabBarOptions: {
    indicator: {backgroundColor: 'transparent'},
    showIcon : true,
    showLabel: Platform.select({android: false, ios: true}),
  }
})

export default Nav
