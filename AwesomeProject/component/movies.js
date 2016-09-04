'use strict';

import React, { Component } from 'react';
import FXBlurView from 'react-native-fxblurview'
const { BlurView, VibrancyView } = require('react-native-blur');
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class Movies extends React.Component {

  render() {
    return (

      <FXBlurView style = {{blurRadius = 80}}>
      <Image source = {require('../images/background.jpg')} >
      </Image>
      </FXBlurView>
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