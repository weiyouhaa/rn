/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// const styles1 = require('./style/styles');÷
// import styles1  from './style/styles.js';
// import movieList from './component/movieList';
import H1 from './component/Text';
import Movies from './component/movieList';
import MovieDetial from './component/MovieDetial';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';

class AwesomeProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab:'list'
    };
  }
  render() {
    return (
      <TabBarIOS
      tintColor='#1D1F55'
      unselectedTintColot='#4D53EB'
      barTintColot='#353AA9'
      >

        <TabBarIOS.Item
        title = 'movies'
          systemIcon="history"
          selected={this.state.selectedTab === 'list'}
          onPress={() => {
            this.setState({
              selectedTab: 'list'
            });}} >
          <Movies/>
        </TabBarIOS.Item> 

        <TabBarIOS.Item
        title = 'ok'
          systemIcon="featured"
          selected={this.state.selectedTab === 'ok'}
          onPress={() => {
            this.setState({
              selectedTab: 'ok'
            });}} >
          <H1>
            ok
          </H1>
        </TabBarIOS.Item>

      </TabBarIOS>
          );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex_start',
    // alignItems: 'center',
    marginTop:20,
    padding:3,
    backgroundColor: '#3EA9B7',
  },
  view1:{
    marginTop:20,
    borderWidth:2,
    borderColor:'#36919B',
    height:40,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  test:{
    fontSize:66,
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
