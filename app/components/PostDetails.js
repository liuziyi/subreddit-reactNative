import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Linking
} from 'react-native';

export default class PostDetails extends Component {

  constructor(props){
    super(props);
    let image;
    try{
      if(typeof this.props.post.data.preview.images[0].source.url == undefined){
        image = '';
      }else{
        image = this.props.post.data.preview.images[0].source.url;
      }
    }catch(e){
      console.log(e)
    }
    this.state = {
      title: this.props.post.data.title,
      score: this.props.post.data.score,
      comments: this.props.post.data.num_comments,
      image: image,
      permalink: this.props.post.data.permalink
    }
  }

  openPage(){
    Linking.openURL('https://reddit/com/'+this.state.permalink)
  }

  navPosts(){
    this.props.navigator.push({
      id: 'posts'
    })
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>
          {this.state.title}
        </Text>
        <Image style={styles.image} source={{ uri: this.state.image }}/>
        <Text style={styles.stats}>
          Score: {this.state.score} | Comments: {this.state.comments}
        </Text>
        <TouchableHighlight style={styles.btn} title="Open Reddit" onPress={() => this.openPage()}>
          <Text style={styles.btnText}>Open Reddit</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.navPosts.bind(this)}>
          <Text style={styles.bkBtnText}>Go Back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    padding: 10
  },
  stats: {
    textAlign: 'center',
    padding: 5,
    backgroundColor: '#e74c3c',
    color: 'white'
  },
  image: {
    width: 400,
    height: 200
  },
  btn: {
    backgroundColor: '#2c3e50',
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  btnText: {
    textAlign: 'center',
    color: 'white'
  },
  bkBtnText: {
    textAlign: 'center'
  }
});

