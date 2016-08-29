'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class Movies extends Component {
  render() {
    return (
      <View>
      <Text style = {styles.Text}>
      ok
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
Text:{
	fontSize:30,
	fontWeight:'bold',
	color:'#182D2F',
}
});


export default Movies;