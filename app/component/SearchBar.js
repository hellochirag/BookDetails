import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles/SearchBarStyles';

export class SearchBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput onChangeText={this.props.onChangeText} placeholder={'Search here'} style={{paddingHorizontal:10, alignItems:'center', textAlign:'left'}}/>
      </View>
    );
  }
}
