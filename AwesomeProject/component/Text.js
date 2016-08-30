'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class H1 extends Component {
  render() {
    return (
      <View>
      <Text style = {styles.Text}>
      '{this.props.children}'
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


export default H1;