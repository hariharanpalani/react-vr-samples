import React, { Component } from 'react';

import { AppRegistry, asset, Pano, View, Text } from 'react-vr';

export class Task extends Component {
  render() {
    return (
      <Text style={{textAlign: 'center', fontSize: 0.2}}>{this.props.text}</Text>
    );
  }
}

export default class Basics extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}></Pano>
        <View
          style={{
            transform: [{translate: [0, 0, -3]}],
            layoutOrigin: [0.5, 0.5]
          }}>
          <Task text="Get goceries" />
          <Task text="Do homework"/>
          <Task text="Do laundry" />
        </View>
      </View>
    )
  }
};

AppRegistry.registerComponent('Basics', () => Basics);