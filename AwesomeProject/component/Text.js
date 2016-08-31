'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class H1 extends Component {
  render() {
    return (
      <View style = {styles.contrainer}>
      <Image style = {{flex:1,height:370,width:370,margin:2}} source = {{uri:this.props.movie.images.large}}>
      
      </Image>
      <Text style = {styles.title}>
      {this.props.movie.title}
      </Text>

      </View>
      );
  }
}
// console.log(this.props.movie);
const styles = StyleSheet.create({
  contrainer:{
    flex:1,
    marginTop:65,
    backgroundColor:'#D5E4EC',
  },
  title:{
    flex:1,
    fontSize:24,
    backgroundColor:'rgba(0, 0, 0, 0.05);',
    fontWeight:'bold',
    alignItems:'flex-end',
    justifyContent:'flex-end',
  },
  introduce:{
    flex:1,
    fontSize:12,
  }
});


export default H1;