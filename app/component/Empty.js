import React from 'react';
import {View, Text} from 'react-native';

export class Empty extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.value}</Text>
      </View>
    );
  }
}
