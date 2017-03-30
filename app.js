import React, { Component } from 'react'

import {AppRegistry} from 'react-native'
import Nav from './nav'

class RNMeetupChi extends Component {
  render() {
    return <Nav />
  }
}

AppRegistry.registerComponent('RNMeetupChi', () => RNMeetupChi)
