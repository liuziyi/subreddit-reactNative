import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HeaderBar extends Component {
  render() {
    return (
      <View style={styles.bar}>
        <Text style={styles.text}>SUBREDDIT</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#e74c3c',
    padding: 15
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  }
});

