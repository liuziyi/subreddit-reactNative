import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Posts from './app/components/Posts';
import PostDetails from './app/components/PostDetails';
import HeaderBar from './app/components/HeaderBar';

export default class subreddit extends Component {

  renderScene(route, navigator){
    switch(route.id){
      case 'posts':
        return(
          <View style={styles.container}>
            <HeaderBar/>
            <Posts navigator={navigator} title="posts"/>
          </View>
        )
      case 'details':
        return(
          <View style={styles.container}>
            <HeaderBar/>
            <PostDetails navigator={navigator} title="details" post={route.post}/>
          </View>
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 'posts' }}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});

AppRegistry.registerComponent('subreddit', () => subreddit);
