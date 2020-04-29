import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export class List extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          borderWidth: 2,
          margin: 5,
          padding: 20,
          borderRadius: 16,
          borderColor: this.props.selected === true ? 'red' : 'blue',
        }}>
        <Text>Title: {this.props.item.Title}</Text>
        <Text>Description: {this.props.item.Description}</Text>
        <Text>Publish Date: {this.props.item.PublishDate.slice(0, 10)}</Text>
        <Text>
          Author: {this.props.author.FirstName} {this.props.author.LastName}{' '}
        </Text>
      </TouchableOpacity>
    );
  }
}
