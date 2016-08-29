'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

class MovieDetial extends Component {
  render() {
    return (
      <View>
      		<Text>
      		{this.props.movie.title}
      		</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default MovieDetial;